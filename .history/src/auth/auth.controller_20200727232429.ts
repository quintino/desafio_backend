import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @UseGuards(JwtAuthGuard)
    @Post('login')
    @ApiResponse({
        status: 200,
        description: 'Acessar a aplicação',
        type: Tools,
      })
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

}
