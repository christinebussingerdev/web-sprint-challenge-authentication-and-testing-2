module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './api/data/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './api/data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './api/database/seeds' },
  },
};
