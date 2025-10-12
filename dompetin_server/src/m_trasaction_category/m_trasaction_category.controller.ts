import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MTrasactionCategoryService } from './m_trasaction_category.service';
import { CreateMTrasactionCategoryDto } from './dto/create-m_trasaction_category.dto';
import { UpdateMTrasactionCategoryDto } from './dto/update-m_trasaction_category.dto';

@Controller('api/tras-category')
export class MTrasactionCategoryController {
  constructor(
    private readonly mTrasactionCategoryService: MTrasactionCategoryService,
  ) {}

  @Post()
  create(@Body() createMTrasactionCategoryDto: CreateMTrasactionCategoryDto) {
    return this.mTrasactionCategoryService.create(createMTrasactionCategoryDto);
  }

  @Get()
  async findAll() {
    return await this.mTrasactionCategoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.mTrasactionCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMTrasactionCategoryDto: UpdateMTrasactionCategoryDto,
  ) {
    return this.mTrasactionCategoryService.update(
      +id,
      updateMTrasactionCategoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mTrasactionCategoryService.remove(+id);
  }
}
