import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class PaginateMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    // @ts-ignore
    if (!req.query.page) req.query.page = 0;
    // @ts-ignore
    if (!req.query.count) req.query.count = 10;
    console.log('response', res.body);
    next();

  }
}
