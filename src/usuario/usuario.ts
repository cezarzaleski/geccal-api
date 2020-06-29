import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity({name: 'usuario'})
export class Usuario {
  @ApiProperty()
  @PrimaryGeneratedColumn({name: 'id_usuario'})
  idUsuario: number;

  @ApiProperty()
  @Column({name: 'no_usuario'})
  noUsuario: string;

  @ApiProperty()
  @Column({name: 'no_senha'})
  noSenha: string;

  @ApiProperty()
  @Column({name: 'st_ativo'})
  stAtivo: boolean;

  @ApiProperty()
  @Column({name: 'dt_cadastro'})
  dtCadastro?: Date;

  @ApiProperty()
  @Column({name: 'dt_ult_visita'})
  dtUltVisita?: Date;

  @ApiProperty()
  @Column({name: 'dt_desativacao'})
  dtDesativacao?: Date;
}