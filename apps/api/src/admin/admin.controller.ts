import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AdminService, AdminRecord } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly service: AdminService) {}

  @Post()
  create(@Body() payload: Omit<AdminRecord, 'id'>) {
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
  update(@Param('id') id: string, @Body() payload: Partial<AdminRecord>) {
    return this.service.update(id, payload);
  }
}
