import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { loginDTO } from './dto/login.dto';
import { compare } from 'bcrypt';
import { registerDTO } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { MUserService } from 'src/m_user/m_user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: MUserService,
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
        return access_token;
      } else {
        return new UnauthorizedException('wrong password');
      }
    } else {
      return new UnauthorizedException('username or email not found');
    }
  }
  async register(registerDTO: registerDTO) {
    if (registerDTO.password != registerDTO.password_confirm) {
      return new BadRequestException('Password and Password Confirm not same');
    }
    const newUser = await this.userService.create(registerDTO);
    return newUser;
  }
  confirmEmail() {
    return 'confirm email';
  }
  confirmPhone() {
    return 'confirm phone';
  }
}
