import { Injectable } from '@nestjs/common';
import { InMemoryRepository, Entity } from '../common/in-memory.repository';

export interface SavedPlacesRecord extends Entity {
  [key: string]: unknown;
}

@Injectable()
export class SavedPlacesService {
  constructor(private readonly repository: InMemoryRepository<SavedPlacesRecord>) {}

  create(payload: Omit<SavedPlacesRecord, 'id'>) {
    return this.repository.create(payload);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, payload: Partial<SavedPlacesRecord>) {
    return this.repository.update(id, payload);
  }
}
