import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { VehiclesService, VehiclesRecord } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly service: VehiclesService) {}

  @Post()
  create(@Body() payload: Omit<VehiclesRecord, 'id'>) {
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
  update(@Param('id') id: string, @Body() payload: Partial<VehiclesRecord>) {
    return this.service.update(id, payload);
  }
}
