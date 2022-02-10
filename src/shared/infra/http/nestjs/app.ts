import { Global, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core'
import { AuthenticateModule } from 'src/shared/infra/http/nestjs/authenticate/authenticate-module'
import { EmprestimoModule } from 'src/shared/infra/http/nestjs/emprestimo/emprestimo-module';
import DatabaseRepositoryFactory from 'src/shared/infra/database/database-repository-factory';
import DatabaseConnectionAdapter from 'src/shared/infra/database/connection-adapter';


@Global()
@Module({
  providers: [
    {
      provide: 'AbstractRepositoryFactory',
      useFactory: () => new DatabaseRepositoryFactory(new DatabaseConnectionAdapter())
    },
  ],
  exports: ['AbstractRepositoryFactory'],
})
export class GlobalModule {}

@Module({
  imports: [
    AuthenticateModule,
    EmprestimoModule,
    GlobalModule
  ]
})
class AppModule {}

export const NestApp = NestFactory.create(AppModule)
