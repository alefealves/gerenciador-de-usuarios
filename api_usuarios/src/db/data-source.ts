import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './seeds/MainSeeder';

config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [__dirname + '../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migration/{.ts,*.js}'],
  migrationsRun: true,
  seeds: [MainSeeder],
  //seeds: ['dist/db/seeds/**/*.js'],
};

//export const AppDataSource = dataSourceOptions;