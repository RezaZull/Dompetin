import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategyGuard } from './guards/local-strategy.guard';
import { Request as Req } from 'express';

interface LocalAuthRequest extends Req {
  user: {
    userId: bigint;
    username: string;
  };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  // @Post('login')
  // async login(@Body() loginDTO: loginDTO) {
  //   return await this.AuthService.authenticate(loginDTO);
  // }

  @Post('login')
  @UseGuards(LocalStrategyGuard)
  async loginLocal(@Request() request: LocalAuthRequest) {
    return this.AuthService.signIn(request.user);
  }
}
