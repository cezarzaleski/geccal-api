import { Module } from '@nestjs/common';
import { EmprestimoRouter } from 'src/shared/infra/http/nestjs/emprestimo/emprestimo-router';

@Module({
  controllers: [EmprestimoRouter]
})
export class EmprestimoModule {}
