import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from 'src/models/user.model';
import { UserSchema } from 'src/schemas/user.schema';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IndexUserSwagger } from 'src/swagger/index-user.swagger';
import { CreateUserSwagger } from 'src/swagger/create-user.swagger';
import { ShowUserSwagger } from 'src/swagger/show-user.swagger';
import { UpdateUserSwagger } from 'src/swagger/update-user.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';

@ApiTags('Usuário')
@Controller('/user')
export class UserController {
  constructor(
    @InjectRepository(UserModel) private model: Repository<UserModel>,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Adicionar um novo usuário' })
  @ApiResponse({
    status: 201,
    description: 'Novo usuário criado com sucesso',
    type: CreateUserSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  public async create(@Body() body: UserSchema): Promise<UserModel> {
    return this.model.save(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um usuário' })
  @ApiResponse({
    status: 200,
    description: 'Dados de um usuário retornado com sucesso',
    type: ShowUserSwagger,
    isArray: true,
  })
  @ApiResponse({ status: 404, description: 'Usuário não foi encontrado', type: NotFoundSwagger })
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserModel> {
    const user = await this.model.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`Não foi encontrado usuário com id ${id}`);
    }

    return user;
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários retornado com sucesso',
    type: IndexUserSwagger,
    isArray: true,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro no servidor',
    type: BadRequestSwagger,
  })
  public async getAll(): Promise<UserModel[]> {
    return this.model.find();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um usuário' })
  @ApiResponse({
    status: 200,
    description: 'Usuário atualizado com sucesso',
    type: UpdateUserSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não foi encontrado',
    type: NotFoundSwagger,
  })
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UserSchema,
  ): Promise<UserModel> {
    const user = await this.model.findOne({ where: { id }});

    if (!user) {
      throw new NotFoundException(`Não foi encontrado usuário com id ${id}`);
    }

    await this.model.update({ id }, body);

    return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um usuário' })
  @ApiResponse({ status: 204, description: 'Usuário deletado com sucesso' })
  @ApiResponse({
    status: 404,
    description: 'Usuário não foi encontrado',
    type: NotFoundSwagger,
  })
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const user = await this.model.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`Não foi encontrado usuário com id ${id}`);
    }

    await this.model.delete(id);

    return `O usuário com id ${id} foi excluído com sucesso`;
  }
}
