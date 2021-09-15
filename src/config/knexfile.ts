import path from 'path';

const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(
        __dirname,
        '..',
        'shared',
        'infra',
        'database',
        'dev.sqlite',
      ),
    },
    migrations: {
      directory: path.resolve(
        __dirname,
        '..',
        'shared',
        'infra',
        'database',
        'migrations',
      ),
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: path.resolve(
        __dirname,
        '..',
        'shared',
        'infra',
        'database',
        'seeds',
      ),
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
  },
};
export default config;
