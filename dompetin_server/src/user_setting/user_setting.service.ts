import { Injectable } from '@nestjs/common';
import { CreateUserSettingDto } from './dto/create-user_setting.dto';
import { UpdateUserSettingDto } from './dto/update-user_setting.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserSettingService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserSettingDto: CreateUserSettingDto) {
    return this.prisma.user_setting.create({
      data: createUserSettingDto,
    });
  }

  findAll() {
    return this.prisma.user_setting.findMany({ where: { deleted: null } });
  }

  findOne(id: number) {
    return this.prisma.user_setting.findUnique({
      where: { id, deleted: null },
    });
  }

  update(id: number, updateUserSettingDto: UpdateUserSettingDto) {
    return this.prisma.user_setting.update({
      where: { id },
      data: { ...updateUserSettingDto, updated: new Date() },
    });
  }

  remove(id: number) {
    return this.prisma.user_setting.update({
      where: { id },
      data: {
        deleted: new Date(),
      },
    });
  }
}
