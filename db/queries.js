const knex = require('./knex')
module.exports = {
  getAllSurfers(){
    return knex('surfer')
  },
  getAllBreaks(){
    return knex('break')
  }
}
