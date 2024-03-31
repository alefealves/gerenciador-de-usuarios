import { UserModel } from "src/models/user.model";
import { DataSource } from "typeorm";
import { applyQuery, Seeder, SeederFactoryManager } from "typeorm-extension";
import bcrypt from 'bcrypt';

export class UserSeeder implements Seeder {
  async run(dataSouce: DataSource, factoryManager: SeederFactoryManager): Promise<void>{
    const userRepository = dataSouce.getRepository(UserModel)

    const userData = {
      nome: 'admin',
      sobrenome: 'admin',
      email: 'admin@admin.com',
      senha: await bcrypt.hash('admin', 10),
      nivel_acesso: 2
    }

    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);
  }
}