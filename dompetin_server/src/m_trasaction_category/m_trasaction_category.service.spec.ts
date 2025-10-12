import { Test, TestingModule } from '@nestjs/testing';
import { MTrasactionCategoryService } from './m_trasaction_category.service';

describe('MTrasactionCategoryService', () => {
  let service: MTrasactionCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MTrasactionCategoryService],
    }).compile();

    service = module.get<MTrasactionCategoryService>(
      MTrasactionCategoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
