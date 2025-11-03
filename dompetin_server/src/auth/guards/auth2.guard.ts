import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
type jwtType = { sub: bigint; username: string };
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const authorization = request.headers.authorization;
    const token = authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const tokenValidate = await this.jwtService.verifyAsync<jwtType>(token);
      request.user = {
        userId: tokenValidate.sub,
        username: tokenValidate.username,
      };
      return true;
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }
}
