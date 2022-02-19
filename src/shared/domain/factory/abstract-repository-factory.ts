import EmprestimoRepository from 'src/emprestimo/domain/repository/emprestimo-repository'
import UsuarioRepository from 'src/identificacao-acesso/domain/repository/usuario-repository'
import PerfilRepository from 'src/identificacao-acesso/domain/repository/perfil-repository'
import ColaboradorRepository from 'src/identificacao-acesso/domain/repository/colaborador-repository'
import AutorRepository from 'src/livro/domain/repository/autor-repository'
import EditoraRepository from 'src/livro/domain/repository/editora-repository'
import LivroRepository from 'src/livro/domain/repository/livro-repository'

export default interface AbstractRepositoryFactory {
  createEmprestimoRepository: () => EmprestimoRepository
  createUsuarioRepository: () => UsuarioRepository
  createPerfilRepository: () => PerfilRepository
  createColaboradorRepository: () => ColaboradorRepository
  createAutorRepository: () => AutorRepository
  createEditoraRepository: () => EditoraRepository
  createLivroRepository: () => LivroRepository
}
