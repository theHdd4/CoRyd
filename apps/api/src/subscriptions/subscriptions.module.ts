import { Module } from '@nestjs/common';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';
import { InMemoryRepository } from '../common/in-memory.repository';

@Module({
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService, InMemoryRepository],
  exports: [SubscriptionsService],
})
export class SubscriptionsModule {}
