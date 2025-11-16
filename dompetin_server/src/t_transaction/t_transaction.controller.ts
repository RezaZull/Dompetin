import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TTransactionService } from './t_transaction.service';
import { CreateTTransactionDto } from './dto/create-t_transaction.dto';
import { UpdateTTransactionDto } from './dto/update-t_transaction.dto';
import { AuthGuard } from 'src/auth/guards/auth2.guard';

@Controller('api/t-transaction')
export class TTransactionController {
  constructor(private readonly tTransactionService: TTransactionService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createTTransactionDto: CreateTTransactionDto) {
    return this.tTransactionService.create(createTTransactionDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return await this.tTransactionService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.tTransactionService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTTransactionDto: UpdateTTransactionDto,
  ) {
    return this.tTransactionService.update(+id, updateTTransactionDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tTransactionService.remove(+id);
  }
}
