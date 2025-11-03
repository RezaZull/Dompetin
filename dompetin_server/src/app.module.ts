import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MUserModule } from './m_user/m_user.module';
import { MAccountModule } from './m_account/m_account.module';
import { UserSettingModule } from './user_setting/user_setting.module';
import { MTrasactionCategoryModule } from './m_trasaction_category/m_trasaction_category.module';
import { TTransactionModule } from './t_transaction/t_transaction.module';
import { AuthModule } from './auth/auth.module';
import { Auth2Module } from './auth2/auth2.module';

@Module({
  imports: [
    PrismaModule,
    MUserModule,
    MAccountModule,
    UserSettingModule,
    MTrasactionCategoryModule,
    TTransactionModule,
    AuthModule,
    Auth2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
