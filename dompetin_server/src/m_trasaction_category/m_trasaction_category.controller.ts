import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MTrasactionCategoryService } from './m_trasaction_category.service';
import { CreateMTrasactionCategoryDto } from './dto/create-m_trasaction_category.dto';
import { UpdateMTrasactionCategoryDto } from './dto/update-m_trasaction_category.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('api/tras-category')
export class MTrasactionCategoryController {
  constructor(
    private readonly mTrasactionCategoryService: MTrasactionCategoryService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createMTrasactionCategoryDto: CreateMTrasactionCategoryDto) {
    return this.mTrasactionCategoryService.create(createMTrasactionCategoryDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return await this.mTrasactionCategoryService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.mTrasactionCategoryService.findOne(+id);
  }

  @UseGuards(AuthGuard)
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

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mTrasactionCategoryService.remove(+id);
  }
}
