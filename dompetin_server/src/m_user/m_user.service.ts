import { Injectable } from '@nestjs/common';
import { CreateMUserDto } from './dto/create-m_user.dto';
import { UpdateMUserDto } from './dto/update-m_user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MUserService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMUserDto: CreateMUserDto) {
    return this.prisma.m_user.create({
      data: createMUserDto,
    });
  }

  findAll() {
    return this.prisma.m_user.findMany({ where: { deleted: null } });
  }

  findOne(id: number) {
    return this.prisma.m_user.findUnique({
      where: { id: id, deleted: null },
    });
  }

  update(id: number, updateMUserDto: UpdateMUserDto) {
    return this.prisma.m_user.update({
      where: { id: id },
      data: { ...updateMUserDto, updated: new Date() },
    });
  }

  remove(id: number) {
    return this.prisma.m_user.update({
      where: { id },
      data: { deleted: new Date() },
    });
  }
}
