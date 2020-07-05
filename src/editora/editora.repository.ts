import { EntityRepository, Repository } from 'typeorm';
import { Editora } from 'src/editora/editora';

@EntityRepository(Editora)
export class EditoraRepository extends Repository<Editora> {}