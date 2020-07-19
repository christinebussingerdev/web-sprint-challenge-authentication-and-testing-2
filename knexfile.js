module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './api/data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './api/data/seeds' },
  },
};
