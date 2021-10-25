import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {Repository} from 'typeorm'
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskPgModule } from './task-pg/task-pg.module';
import * as ormcofig from '../ormconfig'


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://toto:20445718@cluster0.ze4te.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
  TypeOrmModule.forRoot(ormcofig),
    TasksModule,
    TaskPgModule],
})
export class AppModule {}
