const crypto = require('crypto');
const axios = require('axios');
const timesService = require('../service/timesService');

const generate = function(){
    return crypto.randomBytes(20).toString('hex')
}

const request = function (url, method, data){
    return axios({url, method, data});
};

test('Deve obter todos os times', async function () {

    const time1 = await timesService.saveTime({nome: generate()})
    const time2 = await timesService.saveTime({nome: generate()})
    const time3 = await timesService.saveTime({nome: generate()})
	const response = await request('http://localhost:3000/times', 'get');
	const times = response.data;
	expect(times).toHaveLength(14);
	await timesService.deleteTime(time1.id);
	await timesService.deleteTime(time2.id);
	await timesService.deleteTime(time3.id);
});

test('Deve salvar um time', async function () {
    const data = { nome: generate()};
	const response = await request('http://localhost:3000/times', 'post', data);
	const time = response.data;
	expect(time.nome).toBe(data.nome);
	await timesService.deleteTime(time.id);
	
});

test('Deve editar um time', async function () {
	const time = await timesService.saveTime({ nome: generate()});
	time.nome = generate();
	await request(`http://localhost:3000/times/${time.id}`, 'patch', time);
	const updatedTime = await timesService.getTime(time.id);
	expect(updatedTime.nome).toBe(time.nome);
	await timesService.deleteTime(time.id);
});

test('Deve deletar um time', async function () {
	const time = await timesService.saveTime({ nome: generate()});
	await request(`http://localhost:3000/times/:${time.id}`, 'delete');
	const times = await timesService.getTimes();
	expect(times).toHaveLength(15);
});