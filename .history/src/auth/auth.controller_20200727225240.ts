import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tools')
@Controller('auth')
export class AuthController {}
