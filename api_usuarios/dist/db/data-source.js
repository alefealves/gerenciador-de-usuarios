"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const dotenv_1 = require("dotenv");
const MainSeeder_1 = require("./seeds/MainSeeder");
(0, dotenv_1.config)();
exports.dataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [__dirname + '../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migration/{.ts,*.js}'],
    migrationsRun: true,
    seeds: [MainSeeder_1.MainSeeder],
};
//# sourceMappingURL=data-source.js.map