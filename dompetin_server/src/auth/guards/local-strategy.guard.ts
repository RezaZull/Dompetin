import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//guard untuk local strategy (login)
@Injectable()
export class LocalStrategyGuard extends AuthGuard('local') {}
