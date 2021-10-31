import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import configValues from './values/config.values';
import configSchema from './schemas/config.schema';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [configValues],
      validationSchema: [configSchema]
    })
  ],
  exports: [NestConfigModule]
})
export class ConfigModule {}
