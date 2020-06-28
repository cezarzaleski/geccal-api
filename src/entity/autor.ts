import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';


@Entity({name: 'autor'})
export class Autor {
  @ApiProperty()
  @PrimaryGeneratedColumn({name: 'id_autor'})
  idAutor: number;

  @ApiProperty()
  @Column({name: 'no_autor'})
  @IsNotEmpty({message: 'Nome do autor obrigatório'})
  noAutor: string;

  @ApiProperty()
  @Column({name: 'st_ativo'})
  stAtivo: boolean;

  @ApiProperty()
  @Column({name: 'dt_cadastro'})
  dtCadastro?: Date;
}