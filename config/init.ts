import { Options, Sequelize } from 'sequelize';
import config from '../config/config.json';

const dbconfig = process.env.NODE_ENV == 'dev' ? config.dev : config.prod;
const sequelize = new Sequelize(
  'postgres',
  'sa',
  'Veteranos1',
  dbconfig as Options
);

export default sequelize;
