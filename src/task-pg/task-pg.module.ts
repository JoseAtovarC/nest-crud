import { Module } from '@nestjs/common';
import { TaskPgController } from './task-pg.controller';
import { TaskPgService } from './task-pg.service';
import { Task } from './entities/entity.task';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Task])],
  controllers: [ TaskPgController],
  providers: [TaskPgService]
})
export class TaskPgModule {}
