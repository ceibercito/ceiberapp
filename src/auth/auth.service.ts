import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { binToUuid, uuidToBin } from '../common/uuid/uuid-binary';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario) private repo: Repository<Usuario>,
    private jwt: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.repo.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException('Credenciales inválidas');
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) throw new UnauthorizedException('Credenciales inválidas');
    return user;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const payload = {
      sub: binToUuid(user.usuarioId),
      empresaId: binToUuid(user.empresaId),
      email: user.email,
    };
    const token = await this.jwt.signAsync(payload);
    return { access_token: token, user: { ...payload, nombre: user.nombre } };
  }
}