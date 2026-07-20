import { Injectable } from '@nestjs/common';
import { InMemoryRepository, Entity } from '../common/in-memory.repository';

export interface NotificationsRecord extends Entity {
  [key: string]: unknown;
}

@Injectable()
export class NotificationsService {
  constructor(private readonly repository: InMemoryRepository<NotificationsRecord>) {}

  create(payload: Omit<NotificationsRecord, 'id'>) {
    return this.repository.create(payload);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, payload: Partial<NotificationsRecord>) {
    return this.repository.update(id, payload);
  }
}
