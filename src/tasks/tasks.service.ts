import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from "./interface/task.interface";
import { Model } from 'mongoose';
import { CreateTaskDTO } from './dto/task.dto';

@Injectable()
export class TasksService {
 constructor(@InjectModel('task')private TaskModel: Model<Task>){}

async getTask(){
   return await this.TaskModel.find()
}

async createTask(task:CreateTaskDTO){
  const newTask= new this.TaskModel(task)
  await newTask.save()
  return 'ok'
}


async deleteTask(id:string){
  
   return await this.TaskModel.findByIdAndDelete(id)
 }

 
 async updateTask(id:string,task:CreateTaskDTO ){
  
   return await this.TaskModel.findByIdAndUpdate(id,task)
 }

}
