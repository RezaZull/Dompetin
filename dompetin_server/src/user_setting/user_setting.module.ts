import { Module } from '@nestjs/common';
import { UserSettingService } from './user_setting.service';
import { UserSettingController } from './user_setting.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserSettingController],
  providers: [UserSettingService],
})
export class UserSettingModule {}
