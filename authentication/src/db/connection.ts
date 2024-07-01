import knex, { Knex } from 'knex';
import knexConfig from '../../knexfile';

const environment = process.env.NODE_ENV || 'development';
const connectionConfig: Knex.Config = knexConfig[environment];

const db = knex(connectionConfig);

export default db;
