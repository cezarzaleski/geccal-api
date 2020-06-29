import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { AutorService } from 'src/autor/autor.service';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AutorModule } from './autor/autor.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    AutorModule,
    AutenticacaoModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService, AutorService, UsuarioService],
})
export class AppModule {}
