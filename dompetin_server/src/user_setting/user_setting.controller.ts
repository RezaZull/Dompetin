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
import { UserSettingService } from './user_setting.service';
import { CreateUserSettingDto } from './dto/create-user_setting.dto';
import { UpdateUserSettingDto } from './dto/update-user_setting.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('api/user-setting')
export class UserSettingController {
  constructor(private readonly userSettingService: UserSettingService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createUserSettingDto: CreateUserSettingDto) {
    return this.userSettingService.create(createUserSettingDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return await this.userSettingService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userSettingService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserSettingDto: UpdateUserSettingDto,
  ) {
    return this.userSettingService.update(+id, updateUserSettingDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSettingService.remove(+id);
  }
}
