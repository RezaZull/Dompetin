import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TTransactionService } from './t_transaction.service';
import { CreateTTransactionDto } from './dto/create-t_transaction.dto';
import { UpdateTTransactionDto } from './dto/update-t_transaction.dto';

@Controller('api/t-transaction')
export class TTransactionController {
  constructor(private readonly tTransactionService: TTransactionService) {}

  @Post()
  create(@Body() createTTransactionDto: CreateTTransactionDto) {
    return this.tTransactionService.create(createTTransactionDto);
  }

  @Get()
  async findAll() {
    return await this.tTransactionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.tTransactionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTTransactionDto: UpdateTTransactionDto,
  ) {
    return this.tTransactionService.update(+id, updateTTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tTransactionService.remove(+id);
  }
}
