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
const swagger_1 = require("@nestjs/swagger");
const index_user_swagger_1 = require("../swagger/index-user.swagger");
const create_user_swagger_1 = require("../swagger/create-user.swagger");
const show_user_swagger_1 = require("../swagger/show-user.swagger");
const update_user_swagger_1 = require("../swagger/update-user.swagger");
const bad_request_swagger_1 = require("../helpers/swagger/bad-request.swagger");
const not_found_swagger_1 = require("../helpers/swagger/not-found.swagger");
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
    (0, swagger_1.ApiOperation)({ summary: 'Adicionar um novo usuário' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Novo usuário criado com sucesso',
        type: create_user_swagger_1.CreateUserSwagger,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Parâmetros inválidos',
        type: bad_request_swagger_1.BadRequestSwagger,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.UserSchema]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um usuário' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Dados de um usuário retornado com sucesso',
        type: show_user_swagger_1.ShowUserSwagger,
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuário não foi encontrado', type: not_found_swagger_1.NotFoundSwagger }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os usuários' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de usuários retornado com sucesso',
        type: index_user_swagger_1.IndexUserSwagger,
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Erro no servidor',
        type: bad_request_swagger_1.BadRequestSwagger,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um usuário' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Usuário atualizado com sucesso',
        type: update_user_swagger_1.UpdateUserSwagger,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Usuário não foi encontrado',
        type: not_found_swagger_1.NotFoundSwagger,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_schema_1.UserSchema]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Deletar um usuário' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Usuário deletado com sucesso' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Usuário não foi encontrado',
        type: not_found_swagger_1.NotFoundSwagger,
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('Usuário'),
    (0, common_1.Controller)('/user'),
    __param(0, (0, typeorm_1.InjectRepository)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserController);
//# sourceMappingURL=user.controller.js.map