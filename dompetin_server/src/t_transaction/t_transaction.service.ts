import { Injectable } from '@nestjs/common';
import { CreateTTransactionDto } from './dto/create-t_transaction.dto';
import { UpdateTTransactionDto } from './dto/update-t_transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TTransactionService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTTransactionDto: CreateTTransactionDto) {
    return this.prisma.t_transaction.create({
      data: createTTransactionDto,
    });
  }

  findAll() {
    return this.prisma.t_transaction.findMany({
      where: { deleted: null },
    });
  }

  findOne(id: number) {
    return this.prisma.t_transaction.findUnique({
      where: { deleted: null, id },
    });
  }

  update(id: number, updateTTransactionDto: UpdateTTransactionDto) {
    return this.prisma.t_transaction.update({
      where: { id },
      data: {
        ...updateTTransactionDto,
        updated: new Date(),
      },
    });
  }

  remove(id: number) {
    return this.prisma.t_transaction.update({
      where: { id },
      data: {
        deleted: new Date(),
      },
    });
  }
}
