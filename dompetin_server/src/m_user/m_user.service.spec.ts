import { Test, TestingModule } from '@nestjs/testing';
import { MUserService } from './m_user.service';

describe('MUserService', () => {
  let service: MUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MUserService],
    }).compile();

    service = module.get<MUserService>(MUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
