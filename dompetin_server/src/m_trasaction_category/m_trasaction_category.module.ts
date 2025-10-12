import { Module } from '@nestjs/common';
import { MTrasactionCategoryService } from './m_trasaction_category.service';
import { MTrasactionCategoryController } from './m_trasaction_category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MTrasactionCategoryController],
  providers: [MTrasactionCategoryService],
})
export class MTrasactionCategoryModule {}
