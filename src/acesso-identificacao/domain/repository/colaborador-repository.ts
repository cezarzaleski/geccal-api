import Colaborador from 'src/acesso-identificacao/domain/entity/colaborador'

export default interface ColaboradorRepository {
  save: (colaborador: Colaborador) => Promise<Colaborador>
  delete: (id: number) => Promise<void>
}
