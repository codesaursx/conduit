require('module-alias/register');
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const port: number = config.get<number>('port');
  await app.listen(port, (): void => {
    Logger.log(`Listening at http://localhost:${port}/`);
  });
}
bootstrap();
