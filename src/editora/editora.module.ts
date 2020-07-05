import { Module } from '@nestjs/common';
import { EditoraController } from './editora.controller';
import { EditoraService } from './editora.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [EditoraController],
  providers: [EditoraService],
  imports: [DatabaseModule]
})
export class EditoraModule {}
