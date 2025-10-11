/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsString } from 'class-validator';

export class CreateMUserDto {
  @IsString()
  name: string;
  @IsString()
  username: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  phone: string;
}
