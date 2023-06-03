import { Test, TestingModule } from '@nestjs/testing';
import { MentAlzhController } from './ment-alzh.controller';
import { MentAlzhService } from './ment-alzh.service';

describe('MentAlzhController', () => {
  let controller: MentAlzhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MentAlzhController],
      providers: [MentAlzhService],
    }).compile();

    controller = module.get<MentAlzhController>(MentAlzhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
