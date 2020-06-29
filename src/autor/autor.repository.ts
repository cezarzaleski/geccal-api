import { Autor } from 'src/autor/autor';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Autor)
export class AutorRepository extends Repository<Autor> {}