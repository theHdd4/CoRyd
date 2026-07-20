import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { InMemoryRepository } from '../common/in-memory.repository';

@Module({
  controllers: [AdminController],
  providers: [AdminService, InMemoryRepository],
  exports: [AdminService],
})
export class AdminModule {}
