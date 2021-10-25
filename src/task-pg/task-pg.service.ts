import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/entity.task';
import { Repository } from 'typeorm';

@Injectable(

)
export class TaskPgService {
 constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) { }

 async getTask(){
     return await this.taskRepository.find()
 }
 
 }
