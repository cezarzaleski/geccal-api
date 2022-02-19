import Colaborador from 'src/identificacao-acesso/domain/entity/colaborador'

export default interface ColaboradorRepository {
  save: (colaborador: Colaborador) => Promise<Colaborador>
  delete: (id: number) => Promise<void>
}
