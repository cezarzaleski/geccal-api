import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity({name: 'autor'})
export class AutorEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn({name: 'id_autor'})
  idAutor: number;

  @ApiProperty()
  @Column({name: 'no_autor'})
  noAutor: string;

  @ApiProperty()
  @Column({name: 'st_ativo'})
  stAtivo: boolean;

  @ApiProperty()
  @Column({name: 'dt_cadastro'})
  dtCadastro?: Date;
}