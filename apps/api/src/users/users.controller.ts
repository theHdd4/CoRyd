import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService, UsersRecord } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  create(@Body() payload: Omit<UsersRecord, 'id'>) {
    return this.service.create(payload);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() payload: Partial<UsersRecord>) {
    return this.service.update(id, payload);
  }
}
