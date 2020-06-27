import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AutorEntity } from 'src/entity/autor.entity';
import { AutorParams } from 'src/controllers/autor.params';

@Injectable()
export class AutorService {
  constructor(
    @Inject('AUTOR_REPOSITORY')
    private autorRepository: Repository<AutorEntity>,
  ) {}

  findAll(autorParams: AutorParams): Promise<[AutorEntity[], number]> {
    delete autorParams.count;
    delete autorParams.page;
    return this.autorRepository.findAndCount({
      where: autorParams,
      take: autorParams.page,
      skip: (autorParams.page) * autorParams.count
    });
  }
}
