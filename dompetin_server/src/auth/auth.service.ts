import { Injectable, UnauthorizedException } from '@nestjs/common';
import { loginDTO } from './dto/login.dto';
import { MUserService } from 'src/m_user/m_user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

type AuthResult = { accessToken: string; userId: bigint; username: string };
type SignInData = { userId: bigint; username: string };

@Injectable()
export class AuthService {
  constructor(
    private muserService: MUserService,
    private jwtService: JwtService,
  ) {}

  async authenticate(loginDTO: loginDTO): Promise<AuthResult> {
    const dataUser = await this.validateUser(loginDTO);
    if (!dataUser) {
      throw new UnauthorizedException();
    }
    return await this.signIn(dataUser);
  }

  async validateUser(loginDTO: loginDTO): Promise<SignInData | null> {
    const userData = await this.muserService.findByEmailOrUsername(
      loginDTO.username,
    );
    if (
      userData != null &&
      (await compare(loginDTO.password, userData.password))
    ) {
      return {
        userId: userData.id,
        username: userData.username,
      };
    }
    return null;
  }

  async signIn(SignInData: SignInData): Promise<AuthResult> {
    const tokenPayload = {
      sub: SignInData.userId,
      username: SignInData.username,
    };
    const resToken = await this.jwtService.signAsync(tokenPayload);
    return {
      accessToken: resToken,
      userId: SignInData.userId,
      username: SignInData.username,
    };
  }
}
