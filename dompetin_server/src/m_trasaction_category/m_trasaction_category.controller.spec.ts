import { Test, TestingModule } from '@nestjs/testing';
import { MTrasactionCategoryController } from './m_trasaction_category.controller';
import { MTrasactionCategoryService } from './m_trasaction_category.service';

describe('MTrasactionCategoryController', () => {
  let controller: MTrasactionCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MTrasactionCategoryController],
      providers: [MTrasactionCategoryService],
    }).compile();

    controller = module.get<MTrasactionCategoryController>(
      MTrasactionCategoryController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
