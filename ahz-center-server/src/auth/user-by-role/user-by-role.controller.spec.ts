import { Test, TestingModule } from '@nestjs/testing';
import { UserByRoleController } from './user-by-role.controller';
import { UserByRoleService } from './user-by-role.service';

describe('UserByRoleController', () => {
  let controller: UserByRoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserByRoleController],
      providers: [UserByRoleService],
    }).compile();

    controller = module.get<UserByRoleController>(UserByRoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
