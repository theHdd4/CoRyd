import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RidesService, RidesRecord } from './rides.service';

@Controller('rides')
export class RidesController {
  constructor(private readonly service: RidesService) {}

  @Post()
  create(@Body() payload: Omit<RidesRecord, 'id'>) {
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
  update(@Param('id') id: string, @Body() payload: Partial<RidesRecord>) {
    return this.service.update(id, payload);
  }
}
