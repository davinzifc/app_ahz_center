import { Test, TestingModule } from '@nestjs/testing';
import { RestorePasswordTokenService } from './restore-password-token.service';

describe('RestorePasswordTokenService', () => {
  let service: RestorePasswordTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestorePasswordTokenService],
    }).compile();

    service = module.get<RestorePasswordTokenService>(RestorePasswordTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
