
exports.up = function(knex, Promise) {
  return knex.schema.createTable('surfer', (table) => {
    table.increments('id').primary();
    table.text('email').unique().notNullable();
    table.text('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.boolean('is_active').notNullable();
    table.integer('break_id').references('break.id').unsigned().onDelete('cascade');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('surfer');
};
