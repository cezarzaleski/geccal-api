import { Injectable } from '@nestjs/common';
import { Autor } from 'src/autor/autor';
import { AutorParams } from 'src/autor/autor.params';
import { AutorRepository } from 'src/autor/autor.repository';

@Injectable()
export class AutorService {
  constructor(
    private readonly autorRepository: AutorRepository,
  ) {}

  listar(autorParams: AutorParams): Promise<[Autor[], number]> {
    delete autorParams.count;
    delete autorParams.page;
    return this.autorRepository.findAndCount({
      where: {...autorParams},
      take: autorParams.page,
      skip: (autorParams.page) * autorParams.count
    });
  }

  salvar(autor: Autor): Promise<Autor> {
    autor.dtCadastro = new Date();
    autor.stAtivo = true;
    return this.autorRepository.save(autor);
  }
}
