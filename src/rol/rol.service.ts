import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './rol.entity';
import { Repository } from 'typeorm';
import { binToUuid, newUuidBin, uuidToBin } from '../common/uuid/uuid-binary';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly repo: Repository<Rol>,
  ) {}

  async create(data: {
    empresaId: string;
    nombre: string;
    descripcion: string;
  }) {
    const entity = this.repo.create({
      rolId: newUuidBin(),
      empresaId: uuidToBin(data.empresaId),
      nombre: data.nombre,
      descripcion: data.descripcion,
    });
    const saved = await this.repo.save(entity);
    return {
      ...saved,
      rolId: binToUuid(saved.rolId),
      empresaId: binToUuid(saved.empresaId),
    };
  }
  async findById(id: string) {
    const rol = await this.repo.findOne({
      where: { rolId: uuidToBin(id) },
    });
    if (!rol) throw new NotFoundException('Rol no encontrado');
    return { ...rol, rolId: id, empresaId: binToUuid(rol.empresaId) };
  }
}
