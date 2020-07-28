import { Controller, UseGuards, Post, Request, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserDTO } from 'src/dto/user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @UseGuards(JwtAuthGuard)
    @Post('login')
    @ApiResponse({
        status: 200,
        description: 'Acessar a aplicação',
        type: UserDTO,
      })
    async login(@Body() req: UserDTO) {
        return this.authService.login(req.user);
    }

}
