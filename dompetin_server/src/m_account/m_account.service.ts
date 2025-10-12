import { Injectable } from '@nestjs/common';
import { CreateMAccountDto } from './dto/create-m_account.dto';
import { UpdateMAccountDto } from './dto/update-m_account.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MAccountService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMAccountDto: CreateMAccountDto) {
    return this.prisma.m_account.create({
      data: createMAccountDto,
    });
  }

  findAll() {
    return this.prisma.m_account.findMany({ where: { deleted: null } });
  }

  findOne(id: number) {
    return this.prisma.m_account.findUnique({ where: { id, deleted: null } });
  }

  update(id: number, updateMAccountDto: UpdateMAccountDto) {
    return this.prisma.m_account.update({
      where: { id },
      data: { ...updateMAccountDto, updated: new Date() },
    });
  }

  remove(id: number) {
    return this.prisma.m_account.update({
      where: { id },
      data: { deleted: new Date() },
    });
  }
}
