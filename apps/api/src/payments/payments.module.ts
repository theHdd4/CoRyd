import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { InMemoryRepository } from '../common/in-memory.repository';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService, InMemoryRepository],
  exports: [PaymentsService],
})
export class PaymentsModule {}
