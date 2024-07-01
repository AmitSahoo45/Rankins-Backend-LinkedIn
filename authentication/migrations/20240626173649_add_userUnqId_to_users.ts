import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.table('Users', (table) => {
        table.string('userUnqId', 12).notNullable();
    });

    await knex.schema.table('Users', (table) => {
        table.index(['userUnqId'], 'idx_userUnqId');
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.table('Users', (table) => {
        table.dropIndex(['userUnqId'], 'idx_userUnqId');
    });

    await knex.schema.table('Users', (table) => {
        table.dropColumn('userUnqId');
    });
}
