import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, MaxLength, IsEmail } from 'class-validator';

export class UserSchema {

  @IsString()
  @MaxLength(100)
  @ApiProperty()
  nome: string;

  @IsString()
  @MaxLength(100)
  @ApiProperty()
  sobrenome: string;

  @IsString()
  @IsEmail()
  @MaxLength(100)
  @ApiProperty()
  email: string;

  @IsString()
  @MaxLength(100)
  @ApiProperty()
  senha: string;

  @IsInt()
  @Min(1)
  @ApiProperty()
  nivel_acesso: number;
}