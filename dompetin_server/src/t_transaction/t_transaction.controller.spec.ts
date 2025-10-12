import { Test, TestingModule } from '@nestjs/testing';
import { TTransactionController } from './t_transaction.controller';
import { TTransactionService } from './t_transaction.service';

describe('TTransactionController', () => {
  let controller: TTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TTransactionController],
      providers: [TTransactionService],
    }).compile();

    controller = module.get<TTransactionController>(TTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
