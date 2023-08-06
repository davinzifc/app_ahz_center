import { Test, TestingModule } from '@nestjs/testing';
import { ProcessTypeUserController } from './process-type-user.controller';
import { ProcessTypeUserService } from './process-type-user.service';

describe('ProcessTypeUserController', () => {
  let controller: ProcessTypeUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcessTypeUserController],
      providers: [ProcessTypeUserService],
    }).compile();

    controller = module.get<ProcessTypeUserController>(ProcessTypeUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
