import { Test, TestingModule } from '@nestjs/testing';
import { RestorePasswordTokenController } from './restore-password-token.controller';
import { RestorePasswordTokenService } from './restore-password-token.service';

describe('RestorePasswordTokenController', () => {
  let controller: RestorePasswordTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestorePasswordTokenController],
      providers: [RestorePasswordTokenService],
    }).compile();

    controller = module.get<RestorePasswordTokenController>(RestorePasswordTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
