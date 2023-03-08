const express = require('express');
const router = express.Router();
const jogadoresService = require('../service/jogadoresService');

router.get('/jogadores', async function (req, res) {
	const jogadores = await jogadoresService.getJogadores();
	res.json(jogadores);
});
router.get('/jogadores/:id', async function (req, res) {
    const time = await timesService.getTime(req.params.id);
	res.json(time);
});

router.post('/jogadores', async function (req, res) {
    const jogador = req.body;
    const newJogador = await jogadoresService.saveJogador(jogador);
    res.json(newJogador);
});
    
router.patch('/jogadores/:id', async function (req, res) {
    const jogador = req.body;
    await jogadoresService.updateJogador(req.params.id, jogador);
    res.end();
});

router.delete('/jogadores/:id', async function (req, res) {
    await jogadoresService.deleteJogador(req.params.id);
    res.end();
});

module.exports = router;