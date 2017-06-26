
exports.up = function(knex, Promise) {
  return knex.schema.createTable('break', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('break_type').notNullable();
    table.text('state').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('break');
};
