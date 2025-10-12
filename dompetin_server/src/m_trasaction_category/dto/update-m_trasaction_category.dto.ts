import { PartialType } from '@nestjs/swagger';
import { CreateMTrasactionCategoryDto } from './create-m_trasaction_category.dto';

export class UpdateMTrasactionCategoryDto extends PartialType(CreateMTrasactionCategoryDto) {}
