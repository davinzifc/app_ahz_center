import { Test, TestingModule } from '@nestjs/testing';
import { UserByRoleService } from './user-by-role.service';

describe('UserByRoleService', () => {
  let service: UserByRoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserByRoleService],
    }).compile();

    service = module.get<UserByRoleService>(UserByRoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
