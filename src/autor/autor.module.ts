import { Module } from '@nestjs/common';
import { AutorController } from 'src/autor/autor.controller';
import { AutorService } from 'src/autor/autor.service';
import { DatabaseModule } from 'src/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AutorController],
  providers: [AutorService],
})
export class AutorModule {}
