import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//guard untuk validasi password
@Injectable()
export class PassportJWTAuthGuard extends AuthGuard('jwt') {}
