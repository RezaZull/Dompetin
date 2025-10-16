import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateMAccountDto } from './dto/create-m_account.dto';
import { UpdateMAccountDto } from './dto/update-m_account.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MAccountService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMAccountDto: CreateMAccountDto) {
    const prismaRes = await this.prisma.m_account.create({
      data: createMAccountDto,
    });
    if (prismaRes) {
      return prismaRes;
    } else {
      return new BadGatewayException('Failed create data');
    }
  }

  async findAll() {
    const prismaRes = await this.prisma.m_account.findMany({
      where: { deleted: null },
    });
    return prismaRes;
  }

  async findOne(id: number) {
    const prismaRes = await this.prisma.m_account.findUnique({
      where: { id, deleted: null },
    });
    return prismaRes;
  }

  async update(id: number, updateMAccountDto: UpdateMAccountDto) {
    const prismaRes = await this.prisma.m_account.update({
      where: { id },
      data: { ...updateMAccountDto, updated: new Date() },
    });
    if (prismaRes) {
      return prismaRes;
    } else {
      return new BadGatewayException('Failed update data');
    }
  }

  async remove(id: number) {
    const prismaRes = await this.prisma.m_account.update({
      where: { id },
      data: { deleted: new Date() },
    });
    return prismaRes;
  }
}
