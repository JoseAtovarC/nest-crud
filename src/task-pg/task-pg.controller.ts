import { Controller, Body, Post, Get, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import {TaskPgService} from './task-pg.service'

@Controller('tasks')
export class TaskPgController {


    constructor(private readonly taskPgService:TaskPgService) { }

    @Get()
    public async getAll() {
        const resp = await this.taskPgService.getTask();

        return resp;
    }


}