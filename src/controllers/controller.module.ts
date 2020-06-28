import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { PaginateMiddleware } from 'src/middlewares/paginate.middleware';

export class ControllerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(PaginateMiddleware)
    //   .forRoutes('autores');
  }
}