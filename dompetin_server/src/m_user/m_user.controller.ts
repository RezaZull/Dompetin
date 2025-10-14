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
import { MUserService } from './m_user.service';
import { CreateMUserDto } from './dto/create-m_user.dto';
import { UpdateMUserDto } from './dto/update-m_user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('api/m-user')
export class MUserController {
  constructor(private readonly mUserService: MUserService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createMUserDto: CreateMUserDto) {
    return this.mUserService.create(createMUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return await this.mUserService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.mUserService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMUserDto: UpdateMUserDto) {
    return this.mUserService.update(+id, updateMUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mUserService.remove(+id);
  }
}
