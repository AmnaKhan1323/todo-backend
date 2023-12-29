// backend/src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'todo.db',
      entities: [path.join('src', '/**/*.model{.ts,.js}')],
      synchronize: true,
    }),
    TodoModule,
  ],
})
export class AppModule {}
