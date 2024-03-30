import { IsString, IsInt, Min, MaxLength, IsEmail } from 'class-validator';

export class UserSchema {

  @IsString()
  @MaxLength(100)
  nome: string;

  @IsString()
  @MaxLength(100)
  sobrenome: string;

  @IsString()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsString()
  @MaxLength(100)
  senha: string;

  @IsInt()
  @Min(1)
  nivel_acesso: number;
}