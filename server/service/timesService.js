const timesData = require('../data/timesData');
const { body, validationResult } = require ('express-validator');
const bodyParser = require('body-parser');

exports.getTimes = function () {
    return timesData.getTimes();
};

exports.getTime = function (id) {
    return timesData.getTime(id);
};

exports.saveTime = function(time) {

    return timesData.saveTime(time);
};

exports.deleteTime = function (id){
    return timesData.deleteTime(id);
}

exports.updateTime = function(id, time) {

    return timesData.updateTime(id, time);
};

