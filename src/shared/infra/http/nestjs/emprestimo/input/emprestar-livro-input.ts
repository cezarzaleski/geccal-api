import { ApiProperty } from '@nestjs/swagger'

export class EmprestarLivroInput {
  @ApiProperty()
  emprestadoEm?: string

  @ApiProperty()
  ano?: number

  @ApiProperty()
  livroId?: number

  @ApiProperty()
  devolvidoEm?: string

  @ApiProperty()
  colaboradorId?: number

  @ApiProperty()
  matriculaId?: number
}
