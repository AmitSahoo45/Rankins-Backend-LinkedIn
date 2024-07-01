import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('Users');
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.createTable('Users', (table) => {
        table.increments('userId').primary();
        table.string('name', 300).notNullable();
        table.string('email', 300).notNullable();
        table.boolean('is_Verified').notNullable();
        table.string('password', 300).notNullable();
        table.text('pfp').notNullable();
        table.string('userUnqId', 12).notNullable();
    });

    await knex.schema.table('Users', (table) => {
        table.index(['is_Verified'], 'idx_is_verified');
        table.index(['userUnqId'], 'idx_userUnqId');
    });
}
