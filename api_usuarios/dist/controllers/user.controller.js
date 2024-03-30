"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_model_1 = require("../models/user.model");
const user_schema_1 = require("../schemas/user.schema");
let UserController = class UserController {
    constructor(model) {
        this.model = model;
    }
    async create(body) {
        return this.model.save(body);
    }
    async getOne(id) {
        const user = await this.model.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`Não foi encontrado usuário com id ${id}`);
        }
        return user;
    }
    async getAll() {
        return this.model.find();
    }
    async update(id, body) {
        const user = await this.model.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`Não foi encontrado usuário com id ${id}`);
        }
        await this.model.update({ id }, body);
        return this.model.findOne({ where: { id } });
    }
    async delete(id) {
        const user = await this.model.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`Não foi encontrado usuário com id ${id}`);
        }
        await this.model.delete(id);
        return `O usuário com id ${id} foi excluído com sucesso`;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.UserSchema]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_schema_1.UserSchema]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('/user'),
    __param(0, (0, typeorm_1.InjectRepository)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserController);
//# sourceMappingURL=user.controller.js.map