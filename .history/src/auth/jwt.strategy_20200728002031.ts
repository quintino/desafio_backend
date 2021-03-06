import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { jwtConstants } from './constants';

export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        console.log(payload);
        return { id: payload.sub, username: payload.username };
    }

}
