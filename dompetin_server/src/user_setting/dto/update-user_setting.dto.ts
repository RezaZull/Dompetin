import { PartialType } from '@nestjs/swagger';
import { CreateUserSettingDto } from './create-user_setting.dto';

export class UpdateUserSettingDto extends PartialType(CreateUserSettingDto) {}
