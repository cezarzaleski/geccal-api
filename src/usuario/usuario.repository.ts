import { EntityRepository, Repository } from 'typeorm';
import { Usuario } from 'src/usuario/usuario';

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {}