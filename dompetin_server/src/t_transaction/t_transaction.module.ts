import { Module } from '@nestjs/common';
import { TTransactionService } from './t_transaction.service';
import { TTransactionController } from './t_transaction.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TTransactionController],
  providers: [TTransactionService],
})
export class TTransactionModule {}
