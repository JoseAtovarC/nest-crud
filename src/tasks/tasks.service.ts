import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from "./interface/task.interface";
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
 constructor(@InjectModel('task')private TaskModel: Model<Task>){}
async getTask(){
   return await this.TaskModel.find()
}



}
