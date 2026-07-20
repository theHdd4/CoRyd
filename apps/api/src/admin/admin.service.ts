import { Injectable } from '@nestjs/common';
import { InMemoryRepository, Entity } from '../common/in-memory.repository';

export interface AdminRecord extends Entity {
  [key: string]: unknown;
}

@Injectable()
export class AdminService {
  constructor(private readonly repository: InMemoryRepository<AdminRecord>) {}

  create(payload: Omit<AdminRecord, 'id'>) {
    return this.repository.create(payload);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, payload: Partial<AdminRecord>) {
    return this.repository.update(id, payload);
  }
}
