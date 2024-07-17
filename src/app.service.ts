import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNestJsTutorial(): string {
    return 'NestJs Mongodb Mongoose Tutorial!';
  }
}
