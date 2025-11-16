import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MUserModule } from 'src/m_user/m_user.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONFIG } from 'src/config/jwt-config';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local-strategy';
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule,
    MUserModule,
    JwtModule.register({
      global: true,
      secret: JWT_CONFIG.secret,
      signOptions: { expiresIn: '1H' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
