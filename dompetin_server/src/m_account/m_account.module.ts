import { Module } from '@nestjs/common';
import { MAccountService } from './m_account.service';
import { MAccountController } from './m_account.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MAccountController],
  providers: [MAccountService],
})
export class MAccountModule {}
