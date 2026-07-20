import { Injectable } from '@nestjs/common';
import { InMemoryRepository, Entity } from '../common/in-memory.repository';

export interface PaymentsRecord extends Entity {
  [key: string]: unknown;
}

@Injectable()
export class PaymentsService {
  constructor(private readonly repository: InMemoryRepository<PaymentsRecord>) {}

  create(payload: Omit<PaymentsRecord, 'id'>) {
    return this.repository.create(payload);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, payload: Partial<PaymentsRecord>) {
    return this.repository.update(id, payload);
  }
}
