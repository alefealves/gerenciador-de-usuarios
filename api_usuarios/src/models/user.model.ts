import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuario' })
export class UserModel {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 100 })
  @ApiProperty()
  nome: string;

  @Column({ length: 100 })
  @ApiProperty()
  sobrenome: string;

  @Column({ length: 100 })
  @ApiProperty()
  email: string;

  @Column({ length: 100 })
  @ApiProperty()
  senha: string;

  @Column('int')
  @ApiProperty()
  nivel_acesso: number;
}
