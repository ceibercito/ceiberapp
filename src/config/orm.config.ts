import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const ormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'mysql-1e2f1f7b-ceiberapp-b053.f.aivencloud.com',
  port: parseInt(process.env.DB_PORT || '28694', 10),
  username: process.env.DB_USER || 'avnadmin',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || 'ceiberapp',
  autoLoadEntities: true,
  synchronize: false, // tablas ya existen
  timezone: 'Z',
  extra: { dateStrings: true },
};
