import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PaymentsService, PaymentsRecord } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly service: PaymentsService) {}

  @Post()
  create(@Body() payload: Omit<PaymentsRecord, 'id'>) {
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
  update(@Param('id') id: string, @Body() payload: Partial<PaymentsRecord>) {
    return this.service.update(id, payload);
  }
}
