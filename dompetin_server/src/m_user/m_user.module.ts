import { Module } from '@nestjs/common';
import { MUserService } from './m_user.service';
import { MUserController } from './m_user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MUserController],
  providers: [MUserService],
  exports: [MUserService],
})
export class MUserModule {}
