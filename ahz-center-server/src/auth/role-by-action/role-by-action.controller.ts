import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleByActionService } from './role-by-action.service';
import { CreateRoleByActionDto } from './dto/create-role-by-action.dto';
import { UpdateRoleByActionDto } from './dto/update-role-by-action.dto';

@Controller('role-by-action')
export class RoleByActionController {
  constructor(private readonly roleByActionService: RoleByActionService) {}

  @Post()
  create(@Body() createRoleByActionDto: CreateRoleByActionDto) {
    return this.roleByActionService.create(createRoleByActionDto);
  }

  @Get()
  findAll() {
    return this.roleByActionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleByActionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleByActionDto: UpdateRoleByActionDto) {
    return this.roleByActionService.update(+id, updateRoleByActionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleByActionService.remove(+id);
  }
}
