import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { DriversService, DriversRecord } from './drivers.service';

@Controller('drivers')
export class DriversController {
  constructor(private readonly service: DriversService) {}

  @Post()
  create(@Body() payload: Omit<DriversRecord, 'id'>) {
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
  update(@Param('id') id: string, @Body() payload: Partial<DriversRecord>) {
    return this.service.update(id, payload);
  }
}
