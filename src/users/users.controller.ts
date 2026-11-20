import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './schema/user.schema.js';
import { CreateUserDoc, GetAllUsersDoc, GetUserByIdDoc } from './users.swagger.js';

@ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @Post()
  @CreateUserDoc()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @GetAllUsersDoc()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @GetUserByIdDoc()
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
