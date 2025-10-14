import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDTO } from './dto/login.dto';
import { registerDTO } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body() loginDTO: loginDTO) {
    return this.authService.login(loginDTO);
  }

  @Post('register')
  register(@Body() registerDTO: registerDTO) {
    return this.authService.register(registerDTO);
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
