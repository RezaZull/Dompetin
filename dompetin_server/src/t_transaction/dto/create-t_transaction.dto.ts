import { transaction_type } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsDate, IsEnum } from 'class-validator';

export class CreateTTransactionDto {
  @Transform(({ value }) => BigInt(value as string))
  id_m_user: bigint;
  @Transform(({ value }) => BigInt(value as string))
  id_m_account: bigint;
  @Transform(({ value }) => BigInt(value as string))
  id_m_transaction_category: bigint;
  @IsDate()
  datetime: Date;
  @IsEnum(transaction_type)
  type: transaction_type;
  @Transform(({ value }) => BigInt(value as string))
  nominal: bigint;
}
