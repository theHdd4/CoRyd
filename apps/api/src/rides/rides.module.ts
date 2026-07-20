import { Module } from '@nestjs/common';
import { RidesController } from './rides.controller';
import { RidesService } from './rides.service';
import { InMemoryRepository } from '../common/in-memory.repository';
import { RidesGateway } from './rides.gateway';

@Module({
  controllers: [RidesController],
  providers: [RidesService, RidesGateway, InMemoryRepository],
  exports: [RidesService],
})
export class RidesModule {}
