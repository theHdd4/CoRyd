import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { InMemoryRepository } from '../common/in-memory.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, InMemoryRepository],
  exports: [UsersService],
})
export class UsersModule {}
