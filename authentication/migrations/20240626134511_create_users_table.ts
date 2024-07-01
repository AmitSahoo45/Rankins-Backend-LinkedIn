import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('Users', (table) => {
        table.increments('userId').primary();
        table.string('name', 300).notNullable();
        table.string('email', 300).notNullable();
        table.boolean('is_Verified').notNullable();
        table.string('password', 300).notNullable();
        table.text('pfp').notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('Users');
}


