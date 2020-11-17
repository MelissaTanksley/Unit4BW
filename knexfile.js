module.exports = {
    development: {
      client: 'sqlite3',
      connection: { filename: './auth.db3' },
      useNullAsDefault: true,
      migrations: {
        directory: './migrations',
        tableName: 'dbmigrations'
      },
      seeds: { directory: './seeds' },
      pool: {
        afterCreate (conn, done)  {
          conn.run("PRAGMA foreign_keys = ON", done)
        },
      },
    }
  };
  