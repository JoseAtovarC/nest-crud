import { Module } from '@nestjs/common';

import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://toto:20445718@cluster0.ze4te.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
TasksModule,
],
})
export class AppModule {}
