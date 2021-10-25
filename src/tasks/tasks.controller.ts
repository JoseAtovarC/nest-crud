import { Controller, Body, Post, Get, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import {TasksService} from './tasks.service'

@Controller('tasks')
export class TasksController {


    constructor(private readonly taskService:TasksService) { }

    @Get()
    public async getAll() {
        const resp = await this.taskService.getTask();

        return resp;
    }


}
