const breaks = require('../fixtures/break')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE break RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('break').insert(breaks);
    });
};
