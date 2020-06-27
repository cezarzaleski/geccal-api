import { Injectable } from '@nestjs/common';
import { Livro } from 'src/interface/livro.iterface';

@Injectable()
export class AppService {
  getHello(): Livro {
    return {
      idLivro: 5,
      noLivro: 'Teste'
    }
  }
}
