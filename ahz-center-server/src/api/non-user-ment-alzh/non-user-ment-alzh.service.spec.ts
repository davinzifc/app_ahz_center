import { Test, TestingModule } from '@nestjs/testing';
import { NonUserMentAlzhService } from './non-user-ment-alzh.service';

describe('NonUserMentAlzhService', () => {
  let service: NonUserMentAlzhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NonUserMentAlzhService],
    }).compile();

    service = module.get<NonUserMentAlzhService>(NonUserMentAlzhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
