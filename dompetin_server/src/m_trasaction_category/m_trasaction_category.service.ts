import { Injectable } from '@nestjs/common';
import { CreateMTrasactionCategoryDto } from './dto/create-m_trasaction_category.dto';
import { UpdateMTrasactionCategoryDto } from './dto/update-m_trasaction_category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  responseHelper,
  responseStatus,
} from 'src/utils/helper/responseHelper';

@Injectable()
export class MTrasactionCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMTrasactionCategoryDto: CreateMTrasactionCategoryDto) {
    const prismaRes = await this.prisma.m_transaction_category.create({
      data: createMTrasactionCategoryDto,
    });
    if (prismaRes) {
      return responseHelper.response(
        responseStatus.CREATED,
        'Successfully create data',
        prismaRes,
      );
    } else {
      return responseHelper.response(
        responseStatus.BAD_REQUEST,
        'Failed create data',
        null,
      );
    }
  }

  async findAll() {
    const prismaRes = await this.prisma.m_transaction_category.findMany({
      where: { deleted: null },
    });
    return responseHelper.response(
      responseStatus.OK,
      'Successfully get data',
      prismaRes,
    );
  }

  async findOne(id: number) {
    const prismaRes = await this.prisma.m_transaction_category.findUnique({
      where: { id, deleted: null },
    });
    return responseHelper.response(
      responseStatus.OK,
      'Successfully get data',
      prismaRes,
    );
  }

  async update(
    id: number,
    updateMTrasactionCategoryDto: UpdateMTrasactionCategoryDto,
  ) {
    const prismaRes = await this.prisma.m_transaction_category.update({
      where: { id },
      data: { ...updateMTrasactionCategoryDto, updated: new Date() },
    });
    if (prismaRes) {
      return responseHelper.response(
        responseStatus.OK,
        'Successfully update data',
        prismaRes,
      );
    } else {
      return responseHelper.response(
        responseStatus.BAD_REQUEST,
        'Failed update data',
        null,
      );
    }
  }

  async remove(id: number) {
    const prismaRes = await this.prisma.m_transaction_category.update({
      where: { id },
      data: { deleted: new Date() },
    });
    return responseHelper.response(
      responseStatus.OK,
      'Successfully delete data',
      prismaRes,
    );
  }
}
