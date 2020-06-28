import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Autor } from 'src/entity/autor';
import { AutorParams } from 'src/controllers/autor.params';

@Injectable()
export class AutorService {
  constructor(
    @Inject('AUTOR_REPOSITORY')
    private autorRepository: Repository<Autor>,
  ) {}

  listar(autorParams: AutorParams): Promise<[Autor[], number]> {
    delete autorParams.count;
    delete autorParams.page;
    return this.autorRepository.findAndCount({
      where: autorParams,
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
