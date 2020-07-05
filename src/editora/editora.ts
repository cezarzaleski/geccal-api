import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';


@Entity({name: 'editora'})
export class Editora {
  @ApiProperty()
  @PrimaryGeneratedColumn({name: 'id_editora'})
  idEditora: number;

  @ApiProperty()
  @Column({name: 'no_editora'})
  @IsNotEmpty({message: 'Nome da editora obrigatória'})
  noEditora: string;

  @ApiProperty()
  @Column({name: 'st_ativo'})
  stAtivo: number;

  @ApiProperty()
  @Column({name: 'dt_cadastro'})
  dtCadastro?: Date;
}