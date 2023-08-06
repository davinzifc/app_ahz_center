import { Test, TestingModule } from '@nestjs/testing';
import { ManagementTicketsController } from './management-tickets.controller';
import { ManagementTicketsService } from './management-tickets.service';

describe('ManagementTicketsController', () => {
  let controller: ManagementTicketsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagementTicketsController],
      providers: [ManagementTicketsService],
    }).compile();

    controller = module.get<ManagementTicketsController>(ManagementTicketsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
