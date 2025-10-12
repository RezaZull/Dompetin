import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MAccountService } from './m_account.service';
import { CreateMAccountDto } from './dto/create-m_account.dto';
import { UpdateMAccountDto } from './dto/update-m_account.dto';

@Controller('api/m-account')
export class MAccountController {
  constructor(private readonly mAccountService: MAccountService) {}

  @Post()
  create(@Body() createMAccountDto: CreateMAccountDto) {
    return this.mAccountService.create(createMAccountDto);
  }

  @Get()
  async findAll() {
    return await this.mAccountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.mAccountService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMAccountDto: UpdateMAccountDto,
  ) {
    return this.mAccountService.update(+id, updateMAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mAccountService.remove(+id);
  }
}
