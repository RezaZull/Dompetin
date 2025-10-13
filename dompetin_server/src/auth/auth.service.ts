import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { loginDTO } from './dto/login.dto';
import { compare } from 'bcrypt';
import {
  responseStatus,
  responseHelper,
} from 'src/utils/helper/responseHelper';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  async login(loginDTO: loginDTO) {
    const dataUser = await this.prisma.m_user.findFirst({
      where: {
        deleted: null,
        OR: [{ username: loginDTO.username }, { email: loginDTO.username }],
      },
      select: {
        password: true,
      },
    });
    if (dataUser) {
      const isMatch = await compare(loginDTO.password, dataUser.password);
      if (isMatch) {
        return responseHelper.response(
          responseStatus.OK,
          true,
          'success login',
          null,
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
}
