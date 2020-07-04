import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Autor } from 'src/autor/autor';
import { AutorParams } from 'src/autor/autor.params';
import { AutorRepository } from 'src/autor/autor.repository';
import { combineLatest, from, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { SituacaoEnum } from 'src/database/database.providers';
import * as _ from 'lodash';

@Injectable()
export class AutorService {
  constructor(
    private readonly autorRepository: AutorRepository,
  ) {}

  listar(autorParams: AutorParams): Promise<[Autor[], number]> {
    const params = {...autorParams};
    delete params.count;
    delete params.page;
    return this.autorRepository.findAndCount({
      where: {...params},
      take: autorParams.count,
      skip: autorParams.page * autorParams.count
    });
  }

  salvar(autor: Autor): Promise<Autor> {
    autor.dtCadastro = new Date();
    autor.stAtivo = 1;
    return this.autorRepository.save(autor);
  }

  excluir(idAutor: number) {
    return from(this.autorRepository.findOne({idAutor}))
      .pipe(
        mergeMap(autor => {
          if (!autor) throw new BadRequestException('Autor não encontrado');
          autor.stAtivo = SituacaoEnum.Inativo;
          return this.autorRepository.save(autor);
        })
      );
  }

  async obter(idAutor: number) {
    const autor = await this.autorRepository.findOne({idAutor});
    if (!autor) throw new NotFoundException('Recurso não encontrado');
    return autor;
  }

  atualizar(autor: Autor, idAutor: number) {
    autor.idAutor = idAutor;
    return from(this.autorRepository.findOne({idAutor}))
      .pipe(
        mergeMap((autorCad) => {
          if (!autorCad) throw new BadRequestException('Autor não encontrado');
          autor = _.merge(autorCad, autor);
          autor.stAtivo = SituacaoEnum.Ativo;
          return combineLatest([
            from(this.autorRepository.update(idAutor, autor)),
            of(autor)
          ])
        }),
        mergeMap(([update, autor]) => of(autor))
      );
  }
}
