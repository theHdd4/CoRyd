import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SubscriptionsService, SubscriptionsRecord } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly service: SubscriptionsService) {}

  @Post()
  create(@Body() payload: Omit<SubscriptionsRecord, 'id'>) {
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
  update(@Param('id') id: string, @Body() payload: Partial<SubscriptionsRecord>) {
    return this.service.update(id, payload);
  }
}
