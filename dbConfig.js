const knex = require('knex');
const environment = require('./environment/index');

const config = require('./knexfile');

module.exports = knex(config[environment]);