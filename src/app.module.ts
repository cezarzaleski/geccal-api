import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';
import { DatabaseModule } from 'src/database.module';
import { AutorService } from 'src/services/autor.service';
import { AutorController } from 'src/controllers/autor.controller';
import { ControllerModule } from 'src/controllers/controller.module';

@Module({
  imports: [DatabaseModule, ControllerModule],
  controllers: [AppController, AutorController],
  providers: [AppService, AutorService],
})
export class AppModule {}
