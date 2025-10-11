import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MUserModule } from './m_user/m_user.module';

@Module({
  imports: [PrismaModule, MUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
