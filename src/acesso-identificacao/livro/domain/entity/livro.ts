export default class Livro {
  constructor (
    readonly nome?: string,
    readonly exemplar?: number,
    readonly status?: boolean,
    readonly dataCadastro?: string,
    readonly id?: number,
    readonly edicao?: string,
    readonly ano?: number,
    readonly observacao?: string,
    readonly editoraId?: number,
    readonly usuarioId?: number,
    readonly origemLivroId?: number,
  ) {}
}
