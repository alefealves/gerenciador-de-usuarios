"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSeeder = void 0;
const user_model_1 = require("../../models/user.model");
const bcrypt_1 = require("bcrypt");
class UserSeeder {
    async run(dataSouce, factoryManager) {
        const userRepository = dataSouce.getRepository(user_model_1.UserModel);
        const userData = {
            nome: 'admin',
            sobrenome: 'admin',
            email: 'admin@admin.com',
            senha: await bcrypt_1.default.hash('admin', 10),
            nivel_acesso: 2
        };
        const newUser = userRepository.create(userData);
        await userRepository.save(newUser);
    }
}
exports.UserSeeder = UserSeeder;
//# sourceMappingURL=UserSeeder.js.map