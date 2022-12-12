require('dotenv').config();

const config = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
};

module.exports = {
  development: {
    ...config,
    database: 'health_development',
  },
  test: {
    ...config,
    database: 'health_test',
    logging: false,
  },
  production: {
    ...config,
    database: 'health_production',
  },
};
