import { IsEmail, IsString } from 'class-validator';
import { IsUnique } from 'src/utils/validates/isUniq.validate';

export class CreateMUserDto {
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
}
