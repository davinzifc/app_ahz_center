import { Test, TestingModule } from '@nestjs/testing';
import { MentAlzhService } from './ment-alzh.service';

describe('MentAlzhService', () => {
  let service: MentAlzhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MentAlzhService],
    }).compile();

    service = module.get<MentAlzhService>(MentAlzhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
