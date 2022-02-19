import Usuario from 'src/acesso-identificacao/domain/entity/usuario'

export default interface UsuarioRepository {
  save: (usuario: Usuario) => Promise<Usuario>
  delete: (id: number) => Promise<void>
  findByEmail: (email: string) => Promise<Usuario>
  findById: (id: number) => Promise<Usuario>
}
