import { Test, TestingModule } from '@nestjs/testing';
import { ManagementTicketsService } from './management-tickets.service';

describe('ManagementTicketsService', () => {
  let service: ManagementTicketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagementTicketsService],
    }).compile();

    service = module.get<ManagementTicketsService>(ManagementTicketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
