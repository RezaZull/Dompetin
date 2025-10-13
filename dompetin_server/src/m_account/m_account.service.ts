import { Injectable } from '@nestjs/common';
import { CreateMAccountDto } from './dto/create-m_account.dto';
import { UpdateMAccountDto } from './dto/update-m_account.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  responseHelper,
  responseStatus,
} from 'src/utils/helper/responseHelper';

@Injectable()
export class MAccountService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMAccountDto: CreateMAccountDto) {
    const prismaRes = await this.prisma.m_account.create({
      data: createMAccountDto,
    });
    if (prismaRes) {
      return responseHelper.response(
        responseStatus.CREATED,
        true,
        'Successfully create data',
        prismaRes,
      );
    } else {
      return responseHelper.response(
        responseStatus.BAD_REQUEST,
        false,
        'Failed create data',
        null,
      );
    }
  }

  async findAll() {
    const prismaRes = await this.prisma.m_account.findMany({
      where: { deleted: null },
    });
    return responseHelper.response(
      responseStatus.OK,
      true,
      'Successfully get data',
      prismaRes,
    );
  }

  async findOne(id: number) {
    const prismaRes = await this.prisma.m_account.findUnique({
      where: { id, deleted: null },
    });
    return responseHelper.response(
      responseStatus.OK,
      true,
      'Successfully get data',
      prismaRes,
    );
  }

  async update(id: number, updateMAccountDto: UpdateMAccountDto) {
    const prismaRes = await this.prisma.m_account.update({
      where: { id },
      data: { ...updateMAccountDto, updated: new Date() },
    });
    if (prismaRes) {
      return responseHelper.response(
        responseStatus.OK,
        true,
        'Successfully update data',
        prismaRes,
      );
    } else {
      return responseHelper.response(
        responseStatus.BAD_REQUEST,
        false,
        'Failed update data',
        null,
      );
    }
  }

  async remove(id: number) {
    const prismaRes = await this.prisma.m_account.update({
      where: { id },
      data: { deleted: new Date() },
    });
    return responseHelper.response(
      responseStatus.OK,
      true,
      'Successfully delete data',
      prismaRes,
    );
  }
}
