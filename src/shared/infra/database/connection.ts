import config from '@config/knexfile';
import knex from 'knex';

const connection = knex(config.development);

export default connection;
