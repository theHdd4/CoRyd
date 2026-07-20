import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NotificationsService, NotificationsRecord } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly service: NotificationsService) {}

  @Post()
  create(@Body() payload: Omit<NotificationsRecord, 'id'>) {
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
  update(@Param('id') id: string, @Body() payload: Partial<NotificationsRecord>) {
    return this.service.update(id, payload);
  }
}
