import { limitPeriod } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEnum } from 'class-validator';

export class CreateUserSettingDto {
  @Transform(({ value }) => BigInt(value as string))
  id_m_user: bigint;
  @IsBoolean()
  email_notif: boolean;
  @IsBoolean()
  tele_notif: boolean;
  @IsEnum(limitPeriod)
  limit_period: limitPeriod;
  @Transform(({ value }) => BigInt(value as string))
  spending_limit: bigint;
}
