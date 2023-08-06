import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestorePasswordTokenService } from './restore-password-token.service';
import { CreateRestorePasswordTokenDto } from './dto/create-restore-password-token.dto';
import { UpdateRestorePasswordTokenDto } from './dto/update-restore-password-token.dto';

@Controller('restore-password-token')
export class RestorePasswordTokenController {
  constructor(private readonly restorePasswordTokenService: RestorePasswordTokenService) {}

  @Post()
  create(@Body() createRestorePasswordTokenDto: CreateRestorePasswordTokenDto) {
    return this.restorePasswordTokenService.create(createRestorePasswordTokenDto);
  }

  @Get()
  findAll() {
    return this.restorePasswordTokenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restorePasswordTokenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestorePasswordTokenDto: UpdateRestorePasswordTokenDto) {
    return this.restorePasswordTokenService.update(+id, updateRestorePasswordTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restorePasswordTokenService.remove(+id);
  }
}
