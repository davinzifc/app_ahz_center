import { Test, TestingModule } from '@nestjs/testing';
import { RoleByActionController } from './role-by-action.controller';
import { RoleByActionService } from './role-by-action.service';

describe('RoleByActionController', () => {
  let controller: RoleByActionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleByActionController],
      providers: [RoleByActionService],
    }).compile();

    controller = module.get<RoleByActionController>(RoleByActionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
