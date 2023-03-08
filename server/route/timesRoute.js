const express = require('express');
const router = express.Router();
const timesService = require('../service/timesService');

router.get('/times', async (req, res) => {
   allTime = [
    [
        body().isEmpty().withMessage('Nenhum time cadastrado'),
        body('nome').isLength({min:3}).withMessage('O nome precisa ter no minimo 3 caracteres')
    
    ],
   ]

	const times = await timesService.getTimes();
	res.json(times);
});

router.get('/times/:id', async function (req, res) {
    const time = await timesService.getTime(req.params.id);
	res.json(time);
});

router.post('/times', async function (req, res) {
    // var erros = [];

    // if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
    //     erros.push({texto:"Nome inválido"})
    // }

    // if(erros.length > 0){
    //     res.return(erros)
    // } else {
    //     const time = req.body;
    //     const newTime = await timesService.saveTime(time);
    //     res.json(newTime);
    // }
    
    const time = req.body;
        const newTime = await timesService.saveTime(time);
        res.json(newTime);
});
    

// router.put('/times/:id', async function (req, res) {
//     const time = req.body;
//     await timesService.updateTime(req.params.id, time);
//     res.end();
// });

router.patch('/times/:id', async function (req, res) {
    const time = req.body;
    await timesService.updateTime(req.params.id, time);
    const timeUpdated = await timesService.getTime(req.params.id);
    res.send(timeUpdated);
});

router.delete('/times/:id', async function (req, res) {
    await timesService.deleteTime(req.params.id);
    res.end('Time deletado com sucesso.');
});

module.exports = router;