import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';

export type Entity = { id: string; createdAt?: string };

@Injectable()
export class InMemoryRepository<T extends Entity> {
  private readonly records = new Map<string, T>();

  create(payload: Omit<T, 'id'>): T {
    const record = { id: randomUUID(), ...payload } as T;
    this.records.set(record.id, record);
    return record;
  }

  findAll(): T[] {
    return [...this.records.values()];
  }

  findById(id: string): T | undefined {
    return this.records.get(id);
  }

  update(id: string, payload: Partial<T>): T | undefined {
    const current = this.records.get(id);
    if (!current) return undefined;
    const updated = { ...current, ...payload, id };
    this.records.set(id, updated);
    return updated;
  }
}
