import { Module } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [UsuarioService],
  exports: [UsuarioService],
  imports: [DatabaseModule]
})
export class UsuarioModule {}
