import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDTO } from './dto/login.dto';
import { registerDTO } from './dto/register.dto';
import {
  responseHelper,
  responseStatus,
} from 'src/utils/helper/responseHelper';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() loginDTO: loginDTO) {
    const res = await this.authService.login(loginDTO);
    // if (res) {
    return responseHelper.responseJWT(
      responseStatus.OK,
      true,
      'Successfully Login',
      null,
      res as string,
    );
    // }
  }

  @Post('register')
  async register(@Body() registerDTO: registerDTO) {
    const res = await this.authService.register(registerDTO);
    if (!res) {
      return responseHelper.response(
        responseStatus.OK,
        'Success Regiser account',
        null,
      );
    }
  }

  @Post('confirm-email')
  confirmEmail() {
    return this.authService.confirmEmail();
  }
  @Post('confirm-phone')
  confirmPhone() {
    return this.authService.confirmPhone();
  }
}
