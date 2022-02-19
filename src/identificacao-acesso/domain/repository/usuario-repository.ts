import Usuario from 'src/identificacao-acesso/domain/entity/usuario'

export default interface UsuarioRepository {
  save: (usuario: Usuario) => Promise<Usuario>
  delete: (id: number) => Promise<void>
  findByEmail: (email: string) => Promise<Usuario>
  findById: (id: number) => Promise<Usuario>
}
