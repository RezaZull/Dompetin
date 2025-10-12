import { Test, TestingModule } from '@nestjs/testing';
import { MAccountService } from './m_account.service';

describe('MAccountService', () => {
  let service: MAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MAccountService],
    }).compile();

    service = module.get<MAccountService>(MAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
