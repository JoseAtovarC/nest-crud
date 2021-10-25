import { Test, TestingModule } from '@nestjs/testing';
import { TaskPgController } from './task-pg.controller';

describe('TaskPgController', () => {
  let controller: TaskPgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskPgController],
    }).compile();

    controller = module.get<TaskPgController>(TaskPgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
