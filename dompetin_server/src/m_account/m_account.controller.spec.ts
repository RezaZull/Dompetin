import { Test, TestingModule } from '@nestjs/testing';
import { MAccountController } from './m_account.controller';
import { MAccountService } from './m_account.service';

describe('MAccountController', () => {
  let controller: MAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MAccountController],
      providers: [MAccountService],
    }).compile();

    controller = module.get<MAccountController>(MAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
