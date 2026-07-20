import { Injectable } from '@nestjs/common';
import { InMemoryRepository, Entity } from '../common/in-memory.repository';

export interface AuthRecord extends Entity {
  [key: string]: unknown;
}

@Injectable()
export class AuthService {
  constructor(private readonly repository: InMemoryRepository<AuthRecord>) {}

  create(payload: Omit<AuthRecord, 'id'>) {
    return this.repository.create(payload);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, payload: Partial<AuthRecord>) {
    return this.repository.update(id, payload);
  }
}
