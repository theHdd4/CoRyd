import { Module } from '@nestjs/common';
import { SavedPlacesController } from './saved-places.controller';
import { SavedPlacesService } from './saved-places.service';
import { InMemoryRepository } from '../common/in-memory.repository';

@Module({
  controllers: [SavedPlacesController],
  providers: [SavedPlacesService, InMemoryRepository],
  exports: [SavedPlacesService],
})
export class SavedPlacesModule {}
