import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ColorService } from './color.service';
import { Auth } from '../auth/decorators/auth.decorators';
import { CurrentUser } from '../user/decorators/user.decorator';
import { CreateStoreDto } from '../store/dto/create-store.dto';
import { UpdateStoreDto } from '../store/dto/update-store.dto';
import { ColorDto } from './dto/color.dto';

@Controller('colors')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Auth()
  @Get('by-storeId/:storeId')
  async getByStoreId(@Param('id') storeId: string) {
    return this.colorService.getByStoreId(storeId);
  }

  @Auth()
  @Get('by-id/:id')
  async getById(@Param('id') id: string) {
    return this.colorService.getById(id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.CREATED)
  @Auth()
  @Post(':storeId')
  async create(@Param('storeId') storeId: string, @Body() dto: ColorDto) {
    return this.colorService.create(storeId, dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.CREATED)
  @Auth()
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: ColorDto) {
    return this.colorService.update(id, dto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.colorService.delete(id);
  }
}
