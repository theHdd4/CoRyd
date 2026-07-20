import { Injectable } from '@nestjs/common';
import { InMemoryRepository, Entity } from '../common/in-memory.repository';

export interface UsersRecord extends Entity {
  [key: string]: unknown;
}

@Injectable()
export class UsersService {
  constructor(private readonly repository: InMemoryRepository<UsersRecord>) {}

  create(payload: Omit<UsersRecord, 'id'>) {
    return this.repository.create(payload);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, payload: Partial<UsersRecord>) {
    return this.repository.update(id, payload);
  }
}
