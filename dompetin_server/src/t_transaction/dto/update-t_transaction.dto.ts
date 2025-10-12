import { PartialType } from '@nestjs/swagger';
import { CreateTTransactionDto } from './create-t_transaction.dto';

export class UpdateTTransactionDto extends PartialType(CreateTTransactionDto) {}
