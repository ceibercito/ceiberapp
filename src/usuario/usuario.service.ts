import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import * as bcrypt from 'bcrypt';
import { newUuidBin, uuidToBin, binToUuid } from '../common/uuid/uuid-binary';

@Injectable()
export class UsuarioService {
  constructor(@InjectRepository(Usuario) private repo: Repository<Usuario>) {}

  async create(data: {
    nombre: string;
    email: string;
    password: string;
    empresaId: string;
  }) {
    const entity = this.repo.create({
      usuarioId: newUuidBin(),
      nombre: data.nombre,
      email: data.email,
      password: await bcrypt.hash(data.password, 10),
      empresaId: uuidToBin(data.empresaId),
      activo: true,
    });
    const saved = await this.repo.save(entity);
    return {
      ...saved,
      usuarioId: binToUuid(saved.usuarioId),
      empresaId: binToUuid(saved.empresaId),
    };
  }

  async findById(id: string) {
    const user = await this.repo.findOne({
      where: { usuarioId: uuidToBin(id) },
    });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return { ...user, usuarioId: id, empresaId: binToUuid(user.empresaId) };
  }
}
