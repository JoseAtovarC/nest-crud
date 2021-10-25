import { Controller, Body, Post, Get, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import {TasksService} from './tasks.service'
import { CreateTaskDTO } from './dto/task.dto';

@Controller('tasks')
export class TasksController {


    constructor(private readonly taskService:TasksService) { }

    @Get()
    public async getAll() {
        const resp = await this.taskService.getTask();

        return resp;
    }

    @Post()

 public async createTask(@Body() createTaskRequest: CreateTaskDTO) {
        const resp = await this.taskService.createTask(createTaskRequest);

        return resp;
    }

    @Delete(':id')

 public async deleteTask(@Param('id') id: string) {
        const resp = await this.taskService.deleteTask(id)

        return resp;
    }

    @Put('/:id')
    async updateProduct( @Body() taskDto: CreateTaskDTO, @Param('id') id:string) {
        const resp=await this.taskService.updateTask(id, taskDto);
       
        return resp
    }
}
