import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';
import { DatabaseModule } from 'src/database.module';
import { AutorService } from 'src/autor/autor.service';
import { AutorController } from 'src/autor/autor.controller';
import { ControllerModule } from 'src/controllers/controller.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AutorModule } from './autor/autor.module';

@Module({
  imports: [
    DatabaseModule,
    ControllerModule,
    AutorModule,
    AutenticacaoModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService, AutorService, UsuarioService],
})
export class AppModule {}
