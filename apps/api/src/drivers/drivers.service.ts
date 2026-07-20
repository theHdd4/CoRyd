import { Injectable } from '@nestjs/common';
import { InMemoryRepository, Entity } from '../common/in-memory.repository';

export interface DriversRecord extends Entity {
  [key: string]: unknown;
}

@Injectable()
export class DriversService {
  constructor(private readonly repository: InMemoryRepository<DriversRecord>) {}

  create(payload: Omit<DriversRecord, 'id'>) {
    return this.repository.create(payload);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, payload: Partial<DriversRecord>) {
    return this.repository.update(id, payload);
  }
}
