import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { InMemoryRepository } from '../common/in-memory.repository';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService, InMemoryRepository],
  exports: [NotificationsService],
})
export class NotificationsModule {}
