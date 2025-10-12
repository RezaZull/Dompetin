import { Injectable } from '@nestjs/common';
import { CreateMTrasactionCategoryDto } from './dto/create-m_trasaction_category.dto';
import { UpdateMTrasactionCategoryDto } from './dto/update-m_trasaction_category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MTrasactionCategoryService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMTrasactionCategoryDto: CreateMTrasactionCategoryDto) {
    return this.prisma.m_transaction_category.create({
      data: createMTrasactionCategoryDto,
    });
  }

  findAll() {
    return this.prisma.m_transaction_category.findMany({
      where: { deleted: null },
    });
  }

  findOne(id: number) {
    return this.prisma.m_transaction_category.findUnique({
      where: { id, deleted: null },
    });
  }

  update(
    id: number,
    updateMTrasactionCategoryDto: UpdateMTrasactionCategoryDto,
  ) {
    return this.prisma.m_transaction_category.update({
      where: { id },
      data: { ...updateMTrasactionCategoryDto, updated: new Date() },
    });
  }

  remove(id: number) {
    return this.prisma.m_transaction_category.update({
      where: { id },
      data: { deleted: new Date() },
    });
  }
}
