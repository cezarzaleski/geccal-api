import Emprestimo from 'src/emprestimo/domain/entity/emprestimo'

export default interface EmprestimoRepository {
  save: (emprestimo: Emprestimo) => Promise<Emprestimo>
  delete: (id: number) => Promise<void>
}
