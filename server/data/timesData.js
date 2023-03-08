const database = require('../infra/database');

exports.getTimes = function () {
     return database.query('select * from e_sports.time');
};

exports.getTime = function (id) {
    return database.oneOrNone('select * from e_sports.time where id = $1', [id])
}

exports.saveTime = function (time) {
    return database.one('insert into e_sports.time(nome) values ($1) returning *', [time.nome]);
};

exports.updateTime = function (id,time) {
    return database.none('update e_sports.time set nome = $1 where id = $2 ', [time.nome, id]);
};

exports.deleteTime = function (id) {
    return database.none('delete from e_sports.time where id = $1', [id]);
};