/* eslint-disable comma-dangle */
module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'talentPool',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: null,
    database: 'talentPool',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
