const surfer = require('../fixtures/surfer')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE surfer RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('surfer').insert(surfer);
    });
};
