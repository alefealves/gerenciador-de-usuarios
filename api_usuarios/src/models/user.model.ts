import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserModel {
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100})
  nome: string;

  @Column({ length: 100})
  sobrenome: string;

  @Column({ length: 100})
  email: string;

  @Column({ length: 100})
  senha: string;

  @Column('int')
  nivel_acesso: number;
}