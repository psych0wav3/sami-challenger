import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', table => {
    table.string('id').notNullable().primary();
    table.string('name').unique().notNullable();
    table.integer('cpf').notNullable();
    table.integer('rg').notNullable();
    table.string('birthDate').notNullable();
    table.string('plan').notNullable();
    table.string('dependents');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
