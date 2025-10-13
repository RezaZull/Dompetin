import { Injectable } from '@nestjs/common';
import { CreateMUserDto } from './dto/create-m_user.dto';
import { UpdateMUserDto } from './dto/update-m_user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';
import {
  responseHelper,
  responseStatus,
} from 'src/utils/helper/responseHelper';

@Injectable()
export class MUserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMUserDto: CreateMUserDto) {
    const hashPassword = (await hash(createMUserDto.password, 10)).toString();
    const prismaRes = await this.prisma.m_user.create({
      data: { ...createMUserDto, password: hashPassword },
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
    const prismaRes = await this.prisma.m_user.findMany({
      where: { deleted: null },
      omit: { password: true },
    });
    return responseHelper.response(
      responseStatus.OK,
      true,
      'Successfully get data',
      prismaRes,
    );
  }

  async findOne(id: number) {
    const prismaRes = await this.prisma.m_user.findUnique({
      where: { id: id, deleted: null },
      omit: { password: true },
    });
    return responseHelper.response(
      responseStatus.OK,
      true,
      'Successfully get data',
      prismaRes,
    );
  }

  async update(id: number, updateMUserDto: UpdateMUserDto) {
    const hashPassword = (
      await hash(updateMUserDto.password as string, 10)
    ).toString();

    const prismaRes = await this.prisma.m_user.update({
      where: { id: id },
      data: { ...updateMUserDto, password: hashPassword, updated: new Date() },
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

  remove(id: number) {
    const prismaRes = this.prisma.m_user.update({
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
