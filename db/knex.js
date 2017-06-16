const environment = process.env.NODE_URL || 'development'
const config = require('../knexfile')
const configEnvironment = config[environment];
const knex = require('knex');
const connection = knex(configEnvironment);

module.exports = connection;
