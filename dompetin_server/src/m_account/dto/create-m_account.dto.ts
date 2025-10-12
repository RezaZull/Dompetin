import { Transform } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';

export class CreateMAccountDto {
  @IsString()
  name: string;
  @Transform(({ value }) => BigInt(value as string))
  @IsDefined()
  balance: bigint;
  @IsString()
  account_nummber: string;
  @Transform(({ value }) => BigInt(value as string))
  @IsDefined()
  id_m_user: bigint;
}
