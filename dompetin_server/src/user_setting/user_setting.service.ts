import { Injectable } from '@nestjs/common';
import { CreateUserSettingDto } from './dto/create-user_setting.dto';
import { UpdateUserSettingDto } from './dto/update-user_setting.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  responseHelper,
  responseStatus,
} from 'src/utils/helper/responseHelper';

@Injectable()
export class UserSettingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserSettingDto: CreateUserSettingDto) {
    const prismaRes = await this.prisma.user_setting.create({
      data: createUserSettingDto,
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
    const prismaRes = await this.prisma.user_setting.findMany({
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
    const prismaRes = await this.prisma.user_setting.findUnique({
      where: { id, deleted: null },
    });

    return responseHelper.response(
      responseStatus.OK,
      true,
      'Successfully get data',
      prismaRes,
    );
  }

  async update(id: number, updateUserSettingDto: UpdateUserSettingDto) {
    const prismaRes = await this.prisma.user_setting.update({
      where: { id },
      data: { ...updateUserSettingDto, updated: new Date() },
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
    const prismaRes = await this.prisma.user_setting.update({
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
