import { Test, TestingModule } from '@nestjs/testing';
import { ProcessTypeUserService } from './process-type-user.service';

describe('ProcessTypeUserService', () => {
  let service: ProcessTypeUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessTypeUserService],
    }).compile();

    service = module.get<ProcessTypeUserService>(ProcessTypeUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
