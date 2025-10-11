import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MUserService } from './m_user.service';
import { CreateMUserDto } from './dto/create-m_user.dto';
import { UpdateMUserDto } from './dto/update-m_user.dto';

@Controller('api/m-user')
export class MUserController {
  constructor(private readonly mUserService: MUserService) {}

  @Post()
  create(@Body() createMUserDto: CreateMUserDto) {
    return this.mUserService.create(createMUserDto);
  }

  @Get()
  async findAll() {
    return await this.mUserService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.mUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMUserDto: UpdateMUserDto) {
    return this.mUserService.update(+id, updateMUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mUserService.remove(+id);
  }
}
