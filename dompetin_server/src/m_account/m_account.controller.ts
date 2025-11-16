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
import { MAccountService } from './m_account.service';
import { CreateMAccountDto } from './dto/create-m_account.dto';
import { UpdateMAccountDto } from './dto/update-m_account.dto';
import { AuthGuard } from 'src/auth/guards/auth2.guard';
import {
  responseHelper,
  responseStatus,
} from 'src/utils/helper/responseHelper';

@Controller('api/m-account')
export class MAccountController {
  constructor(private readonly mAccountService: MAccountService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createMAccountDto: CreateMAccountDto) {
    const res = await this.mAccountService.create(createMAccountDto);
    if (!res) {
      return responseHelper.response(
        responseStatus.OK,
        'Successfully create data',
        res,
      );
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return await this.mAccountService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.mAccountService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMAccountDto: UpdateMAccountDto,
  ) {
    return this.mAccountService.update(+id, updateMAccountDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mAccountService.remove(+id);
  }
}
