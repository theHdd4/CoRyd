import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AuthService, AuthRecord } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post()
  create(@Body() payload: Omit<AuthRecord, 'id'>) {
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
  update(@Param('id') id: string, @Body() payload: Partial<AuthRecord>) {
    return this.service.update(id, payload);
  }
}
