import { Injectable } from '@nestjs/common';
import { CreateTTransactionDto } from './dto/create-t_transaction.dto';
import { UpdateTTransactionDto } from './dto/update-t_transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  responseHelper,
  responseStatus,
} from 'src/utils/helper/responseHelper';

@Injectable()
export class TTransactionService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createTTransactionDto: CreateTTransactionDto) {
    const prismaRes = await this.prisma.t_transaction.create({
      data: createTTransactionDto,
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
        responseStatus.OK,
        false,
        'Failed create data',
        null,
      );
    }
  }

  async findAll() {
    const prismaRes = await this.prisma.t_transaction.findMany({
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
    const prismaRes = await this.prisma.t_transaction.findUnique({
      where: { deleted: null, id },
    });
    return responseHelper.response(
      responseStatus.OK,
      true,
      'Successfully get data',
      prismaRes,
    );
  }

  async update(id: number, updateTTransactionDto: UpdateTTransactionDto) {
    const prismaRes = await this.prisma.t_transaction.update({
      where: { id },
      data: {
        ...updateTTransactionDto,
        updated: new Date(),
      },
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
        'Successfully get data',
        null,
      );
    }
  }

  async remove(id: number) {
    const prismaRes = await this.prisma.t_transaction.update({
      where: { id },
      data: {
        deleted: new Date(),
      },
    });

    return responseHelper.response(
      responseStatus.OK,
      true,
      'Successfully delete data',
      prismaRes,
    );
  }
}
