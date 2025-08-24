import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

interface JwtPayload {
  sub: string; // usuarioId (UUID string)
  empresaId: string; // empresaId (UUID string)
  email: string;
  // Puedes agregar otras propiedades que incluya tu payload JWT
  iat?: number;
  exp?: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    await Promise.resolve();
    return {
      usuarioId: payload.sub,
      empresaId: payload.empresaId,
      email: payload.email,
    };
  }
}
