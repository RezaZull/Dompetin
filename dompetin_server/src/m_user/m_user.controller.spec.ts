import { Test, TestingModule } from '@nestjs/testing';
import { MUserController } from './m_user.controller';
import { MUserService } from './m_user.service';

describe('MUserController', () => {
  let controller: MUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MUserController],
      providers: [MUserService],
    }).compile();

    controller = module.get<MUserController>(MUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
