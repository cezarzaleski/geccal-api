import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { combineLatest, from, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { SituacaoEnum } from 'src/database/database.providers';
import * as _ from 'lodash';
import { EditoraRepository } from 'src/editora/editora.repository';
import { EditoraParams } from 'src/editora/editora.params';
import { Editora } from 'src/editora/editora';
import { formatarParams } from 'src/utils/utilitarias';

@Injectable()
export class EditoraService {
  constructor(
    private readonly editoraRepository: EditoraRepository,
  ) {}

  listar(editoraParams: EditoraParams): Promise<[Editora[], number]> {
    const params = formatarParams(editoraParams);
    delete params.count;
    delete params.page;
    return this.editoraRepository.findAndCount({
      where: {...params},
      take: editoraParams.count,
      skip: editoraParams.page * editoraParams.count
    });
  }

  salvar(editora: Editora): Promise<Editora> {
    editora.dtCadastro = new Date();
    editora.stAtivo = 1;
    return this.editoraRepository.save(editora);
  }

  excluir(idEditora: number) {
    return from(this.editoraRepository.findOne({idEditora}))
      .pipe(
        mergeMap(editora => {
          if (!editora) throw new BadRequestException('Editora não encontrada');
          editora.stAtivo = SituacaoEnum.Inativo;
          return this.editoraRepository.save(editora);
        })
      );
  }

  async obter(idEditora: number) {
    const editora = await this.editoraRepository.findOne({idEditora});
    if (!editora) throw new NotFoundException('Recurso não encontrada');
    return editora;
  }

  atualizar(editora: Editora, idEditora: number) {
    editora.idEditora = idEditora;
    return from(this.editoraRepository.findOne({idEditora}))
      .pipe(
        mergeMap((editoraCad) => {
          if (!editoraCad) throw new BadRequestException('Editora não encontrada');
          editora = _.merge(editoraCad, editora);
          editora.stAtivo = SituacaoEnum.Ativo;
          return combineLatest([
            from(this.editoraRepository.update(idEditora, editora)),
            of(editora)
          ])
        }),
        mergeMap(([update, editora]) => of(editora))
      );
  }
}
