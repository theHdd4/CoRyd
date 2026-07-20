import { Injectable } from '@nestjs/common';
import { InMemoryRepository, Entity } from '../common/in-memory.repository';

export interface VehiclesRecord extends Entity {
  [key: string]: unknown;
}

@Injectable()
export class VehiclesService {
  constructor(private readonly repository: InMemoryRepository<VehiclesRecord>) {}

  create(payload: Omit<VehiclesRecord, 'id'>) {
    return this.repository.create(payload);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, payload: Partial<VehiclesRecord>) {
    return this.repository.update(id, payload);
  }
}
