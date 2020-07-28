import { Controller, UseGuards, Post, Request, Body, Get } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiProperty } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserDTO } from 'src/dto/user.dto';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiP
    @ApiResponse({ status: 200, description: 'Acessar a aplicação', type: UserDTO })
    async login(@Request() req) {
        return this.authService.login(req);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}
