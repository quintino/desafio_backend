import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersM]
  providers: [AuthService]
})
export class AuthModule {}
