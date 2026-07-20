import { Injectable } from '@nestjs/common';
import { InMemoryRepository, Entity } from '../common/in-memory.repository';

export interface RidesRecord extends Entity {
  [key: string]: unknown;
}

@Injectable()
export class RidesService {
  constructor(private readonly repository: InMemoryRepository<RidesRecord>) {}

  create(payload: Omit<RidesRecord, 'id'>) {
    return this.repository.create(payload);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, payload: Partial<RidesRecord>) {
    return this.repository.update(id, payload);
  }
}
