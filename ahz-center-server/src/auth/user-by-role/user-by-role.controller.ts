import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserByRoleService } from './user-by-role.service';
import { CreateUserByRoleDto } from './dto/create-user-by-role.dto';
import { UpdateUserByRoleDto } from './dto/update-user-by-role.dto';

@Controller('user-by-role')
export class UserByRoleController {
  constructor(private readonly userByRoleService: UserByRoleService) {}

  @Post()
  create(@Body() createUserByRoleDto: CreateUserByRoleDto) {
    return this.userByRoleService.create(createUserByRoleDto);
  }

  @Get()
  findAll() {
    return this.userByRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userByRoleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserByRoleDto: UpdateUserByRoleDto) {
    return this.userByRoleService.update(+id, updateUserByRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userByRoleService.remove(+id);
  }
}
