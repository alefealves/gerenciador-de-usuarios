import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from "src/models/user.model";
import { UserSchema } from "src/schemas/user.schema";

@Controller('/user')
export class UserController {

  constructor(@InjectRepository(UserModel) private model: Repository<UserModel>) {}

  @Post()
  public async create(
    @Body() body: UserSchema 
  ): Promise<UserModel> {
     return this.model.save(body);
  }

  @Get(':id')
  public async getOne(@Param('id', ParseIntPipe) id: number): Promise<UserModel> {
    const user = await this.model.findOne({ where: { id }});
    
    if(!user){
      throw new NotFoundException(`Não foi encontrado usuário com id ${id}`);
    }

    return user;
  }

  @Get()
  public async getAll(): Promise<UserModel[]> {
    return this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UserSchema
    ): Promise<UserModel> {
    const user = await this.model.findOne({ where: { id }});
    
    if(!user){
      throw new NotFoundException(`Não foi encontrado usuário com id ${id}`);
    }

    await this.model.update({ id }, body);

    return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(
    @Param('id', ParseIntPipe) id: number
  ): Promise<string> {

    const user = await this.model.findOne({ where: { id }});
    
    if(!user){
      throw new NotFoundException(`Não foi encontrado usuário com id ${id}`);
    }

    await this.model.delete(id);

    return `O usuário com id ${id} foi excluído com sucesso`;
  }
}