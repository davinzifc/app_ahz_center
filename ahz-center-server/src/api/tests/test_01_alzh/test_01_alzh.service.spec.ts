import { Test, TestingModule } from '@nestjs/testing';
import { Test01AlzhService } from './test_01_alzh.service';

describe('Test01AlzhService', () => {
  let service: Test01AlzhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test01AlzhService],
    }).compile();

    service = module.get<Test01AlzhService>(Test01AlzhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
