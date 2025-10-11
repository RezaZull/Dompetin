import { PartialType } from '@nestjs/swagger';
import { CreateMUserDto } from './create-m_user.dto';

export class UpdateMUserDto extends PartialType(CreateMUserDto) {}
