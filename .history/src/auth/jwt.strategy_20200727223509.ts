import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super();
    }

}
