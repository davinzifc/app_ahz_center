import { Test, TestingModule } from '@nestjs/testing';
import { RoleByActionService } from './role-by-action.service';

describe('RoleByActionService', () => {
  let service: RoleByActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleByActionService],
    }).compile();

    service = module.get<RoleByActionService>(RoleByActionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
