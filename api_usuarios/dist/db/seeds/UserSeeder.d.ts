import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
export declare class UserSeeder implements Seeder {
    run(dataSouce: DataSource, factoryManager: SeederFactoryManager): Promise<void>;
}
