import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';

export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super();
    }

}
