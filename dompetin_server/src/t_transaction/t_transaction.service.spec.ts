import { Test, TestingModule } from '@nestjs/testing';
import { TTransactionService } from './t_transaction.service';

describe('TTransactionService', () => {
  let service: TTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TTransactionService],
    }).compile();

    service = module.get<TTransactionService>(TTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
