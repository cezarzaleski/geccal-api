import Perfil from 'src/identificacao-acesso/domain/entity/perfil'

export default interface PerfilRepository {
  save: (perfil: Perfil) => Promise<Perfil>
}
