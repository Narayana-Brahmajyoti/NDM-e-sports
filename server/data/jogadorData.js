
const database = require('../infra/database');

exports.getJogadores = function () {
     return database.query('select * from e_sports.jogador');
};

exports.getJogador = function (id) {
    return database.oneOrNone('select * from e_sports.jogador where id = $1', [id])
}

exports.saveJogador = function (jogador) {
    return database.one('insert into e_sports.jogador (time_id, nome, idade ) values ($1, $2, $3)', [jogador.time_id, jogador.nome, jogador.idade]);

};

exports.updateJogador = function (id,jogador) {
    return database.none('update e_sports.jogador set time_id = $1 nome = $2, idade = #3 where id = $4', [jogador.time_id, jogador.nome, jogador.idade, id]);
    
};

exports.deleteJogador = function (id) {
    return database.none('delete from e_sports.jogador where id = $1', [id])
};