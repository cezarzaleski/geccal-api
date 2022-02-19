import Perfil from 'src/acesso-identificacao/domain/entity/perfil'

export default interface PerfilRepository {
  save: (perfil: Perfil) => Promise<Perfil>
}
