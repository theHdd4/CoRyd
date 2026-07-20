import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { InMemoryRepository } from '../common/in-memory.repository';

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService, InMemoryRepository],
  exports: [VehiclesService],
})
export class VehiclesModule {}
