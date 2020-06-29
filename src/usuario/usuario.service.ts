import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from 'src/usuario/usuario.repository';
import { Usuario } from 'src/usuario/usuario';


@Injectable()
export class UsuarioService {
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
  ) {}

  async findOne(username: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({noUsuario: username});
  }
}
