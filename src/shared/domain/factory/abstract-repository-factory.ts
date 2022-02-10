import EmprestimoRepository from 'src/emprestimo/domain/repository/emprestimo-repository';
import UsuarioRepository from 'src/acesso-identificacao/domain/repository/usuario-repository';
import PerfilRepository from 'src/acesso-identificacao/domain/repository/perfil-repository';
import ColaboradorRepository from 'src/acesso-identificacao/domain/repository/colaborador-repository';
import AutorRepository from 'src/emprestimo/domain/repository/autor-repository';
import EditoraRepository from 'src/emprestimo/domain/repository/editora-repository';
import LivroRepository from 'src/emprestimo/domain/repository/livro-repository';

export default interface AbstractRepositoryFactory {
  createEmprestimoRepository: () => EmprestimoRepository
  createUsuarioRepository: () => UsuarioRepository
  createPerfilRepository: () => PerfilRepository
  createColaboradorRepository: () => ColaboradorRepository
  createAutorRepository: () => AutorRepository
  createEditoraRepository: () => EditoraRepository
  createLivroRepository: () => LivroRepository
}
