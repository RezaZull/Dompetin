import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { loginDTO } from './dto/login.dto';
import { compare } from 'bcrypt';
import {
  responseStatus,
  responseHelper,
} from 'src/utils/helper/responseHelper';
import { registerDTO } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async login(loginDTO: loginDTO) {
    const dataUser = await this.prisma.m_user.findFirst({
      where: {
        deleted: null,
        OR: [{ username: loginDTO.username }, { email: loginDTO.username }],
      },
      select: {
        id: true,
        username: true,
        password: true,
      },
    });
    if (dataUser) {
      const isMatch = await compare(loginDTO.password, dataUser.password);
      if (isMatch) {
        const access_token = await this.jwtService.signAsync({
          username: dataUser.username,
          sub: dataUser.id,
        });
        return responseHelper.responseJWT(
          responseStatus.OK,
          true,
          'success login',
          null,
          access_token,
        );
      } else {
        return responseHelper.response(
          responseStatus.UNAUTHORIZED,
          false,
          'wrong password ',
          null,
        );
      }
    } else {
      return responseHelper.response(
        responseStatus.UNAUTHORIZED,
        true,
        'username or email not found',
        null,
      );
    }
  }
  register(registerDTO: registerDTO) {
    return registerDTO;
  }
  confirmEmail() {
    return 'confirm email';
  }
  confirmPhone() {
    return 'confirm phone';
  }
}
