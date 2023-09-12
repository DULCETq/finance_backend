import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world for real!';
  }
  getProfile(): string {
    return 'This is Profile';
  }
}
