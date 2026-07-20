import { Module } from '@nestjs/common';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';
import { InMemoryRepository } from '../common/in-memory.repository';

@Module({
  controllers: [DriversController],
  providers: [DriversService, InMemoryRepository],
  exports: [DriversService],
})
export class DriversModule {}
