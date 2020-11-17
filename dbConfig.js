const knex = require('knex');
const environment = require('./models/model');

const config = require('./knexfile');

module.exports = knex(config[environment]);