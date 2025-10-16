import { PartialType } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { CreateMUserDto } from 'src/m_user/dto/create-m_user.dto';
import { IsUnique } from 'src/utils/validates/isUniq.validate';

export class registerDTO extends PartialType(CreateMUserDto) {
  @IsString()
  name: string;
  @IsUnique({ column: 'username', tableName: 'm_user' })
  @IsString()
  username: string;
  @IsString()
  @IsUnique({ column: 'email', tableName: 'm_user' })
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  phone: string;
  @IsString()
  password_confirm: string;
}
