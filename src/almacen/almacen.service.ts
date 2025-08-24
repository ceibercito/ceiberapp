import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Almacen } from './almacen.entity';
import { Repository } from 'typeorm';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { binToUuid, newUuidBin, uuidToBin } from '../common/uuid/uuid-binary';

@Injectable()
export class AlmacenService {
  constructor(
    @InjectRepository(Almacen)
    private readonly repo: Repository<Almacen>,
  ) {}
  async create(dto: CreateAlmacenDto) {
    const entity = this.repo.create({
      almacenId: newUuidBin(),
      empresaId: uuidToBin(dto.empresaId),
      nombre: dto.nombre,
      ubicacion: dto.ubicacion,
      capacidad: dto.capacidad,
      responsable: dto.responsable,
    });
    await this.repo.save(entity);
    return { ...entity };
  }
  async findOne(id: string) {
    const almacen = await this.repo.findOneBy({ almacenId: uuidToBin(id) });
    if (!almacen) throw new NotFoundException('Almacen no encontrado');
    return { ...almacen, almacenId: binToUuid(almacen.almacenId) };
  }
}
