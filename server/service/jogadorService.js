const JogadoresData = require('../data/jogadoresData');

exports.getJogadores = function () {
    return JogadoresData.getJogadores();
};

exports.getJogador = function (id) {
    return JogadoresData.getJogador(id);
};

exports.saveJogador = function(Jogador) {
    return JogadoresData.saveJogador(Jogador);
};

exports.deleteJogador = function (id){
    return JogadoresData.deleteJogador(id);
}

exports.updateJogador = function(id, Jogador) {
    return JogadoresData.updateJogador(id, Jogador);
};
