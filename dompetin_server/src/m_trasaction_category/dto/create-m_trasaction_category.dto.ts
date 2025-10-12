import { transaction_type } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsEnum, IsString } from 'class-validator';

export class CreateMTrasactionCategoryDto {
  @Transform(({ value }) => BigInt(value as string))
  id_m_user: bigint;
  @IsString()
  name: string;
  @IsEnum(transaction_type)
  type: transaction_type;
}
