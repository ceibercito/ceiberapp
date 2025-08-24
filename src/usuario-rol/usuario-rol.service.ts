import { UsuarioRolEntity } from './usuario-rol.entity';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { binToUuid, newUuidBin, uuidToBin } from '../common/uuid/uuid-binary';

@Injectable()
export class UsuarioRolService {
  constructor(
    @InjectRepository(UsuarioRolEntity)
    private readonly repo: Repository<UsuarioRolEntity>,
  ) {}

  async create(data: { usuarioId: string; rolId: string }) {
    const entity = this.repo.create({
      usuarioRolId: newUuidBin(),
      usuarioId: uuidToBin(data.usuarioId),
      rolId: uuidToBin(data.rolId),
    });
    const saved = await this.repo.save(entity);
    return {
      usuarioId: binToUuid(saved.usuarioId),
      rolId: binToUuid(saved.rolId),
    };
  }
  async findById(id: string) {
    const usuarioRol = await this.repo.findOne({
      where: { usuarioRolId: uuidToBin(id) },
    });
    if (!usuarioRol) throw new NotFoundException('Usuario Rol no encontrado');
    return {
      ...usuarioRol,
      usuarioRolId: id,
      usuarioId: binToUuid(usuarioRol.usuarioId),
      rolId: binToUuid(usuarioRol.rolId),
    };
  }
}
