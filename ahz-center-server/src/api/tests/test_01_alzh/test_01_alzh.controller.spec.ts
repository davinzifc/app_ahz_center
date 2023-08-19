import { Test, TestingModule } from '@nestjs/testing';
import { Test01AlzhController } from './test_01_alzh.controller';
import { Test01AlzhService } from './test_01_alzh.service';

describe('Test01AlzhController', () => {
  let controller: Test01AlzhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Test01AlzhController],
      providers: [Test01AlzhService],
    }).compile();

    controller = module.get<Test01AlzhController>(Test01AlzhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
