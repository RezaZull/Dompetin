import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { CreateMUserDto } from './dto/create-m_user.dto';
import { UpdateMUserDto } from './dto/update-m_user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class MUserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMUserDto: CreateMUserDto) {
    const hashPassword = (await hash(createMUserDto.password, 10)).toString();
    const prismaRes = await this.prisma.m_user.create({
      data: { ...createMUserDto, password: hashPassword },
    });
    if (prismaRes) {
      return prismaRes;
    } else {
      return new BadGatewayException('Failed create data');
    }
  }

  async findAll() {
    const prismaRes = await this.prisma.m_user.findMany({
      where: { deleted: null },
      omit: { password: true },
    });
    return prismaRes;
  }

  async findOne(id: number) {
    const prismaRes = await this.prisma.m_user.findUnique({
      where: { id: id, deleted: null },
      omit: { password: true },
    });
    return prismaRes;
  }

  async findByEmailOrUsername(emailOrUsername: string) {
    const prismaRes = await this.prisma.m_user.findFirst({
      where: {
        deleted: null,
        OR: [{ username: emailOrUsername }, { email: emailOrUsername }],
      },
    });
    return prismaRes;
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
      return prismaRes;
    } else {
      return new BadRequestException('Failed update data');
    }
  }

  remove(id: number) {
    const prismaRes = this.prisma.m_user.update({
      where: { id },
      data: { deleted: new Date() },
    });
    return prismaRes;
  }
}
