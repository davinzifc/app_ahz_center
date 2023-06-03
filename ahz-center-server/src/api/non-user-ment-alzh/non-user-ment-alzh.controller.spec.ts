import { Test, TestingModule } from '@nestjs/testing';
import { NonUserMentAlzhController } from './non-user-ment-alzh.controller';
import { NonUserMentAlzhService } from './non-user-ment-alzh.service';

describe('NonUserMentAlzhController', () => {
  let controller: NonUserMentAlzhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NonUserMentAlzhController],
      providers: [NonUserMentAlzhService],
    }).compile();

    controller = module.get<NonUserMentAlzhController>(NonUserMentAlzhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
