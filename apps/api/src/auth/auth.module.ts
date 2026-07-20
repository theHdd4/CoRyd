import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { InMemoryRepository } from '../common/in-memory.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, InMemoryRepository],
  exports: [AuthService],
})
export class AuthModule {}
