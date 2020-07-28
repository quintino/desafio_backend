import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
