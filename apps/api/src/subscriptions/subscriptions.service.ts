import { Injectable } from '@nestjs/common';
import { InMemoryRepository, Entity } from '../common/in-memory.repository';

export interface SubscriptionsRecord extends Entity {
  [key: string]: unknown;
}

@Injectable()
export class SubscriptionsService {
  constructor(private readonly repository: InMemoryRepository<SubscriptionsRecord>) {}

  create(payload: Omit<SubscriptionsRecord, 'id'>) {
    return this.repository.create(payload);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, payload: Partial<SubscriptionsRecord>) {
    return this.repository.update(id, payload);
  }
}
