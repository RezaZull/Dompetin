import { PartialType } from '@nestjs/swagger';
import { CreateMAccountDto } from './create-m_account.dto';

export class UpdateMAccountDto extends PartialType(CreateMAccountDto) {}
