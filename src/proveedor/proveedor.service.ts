import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from './proveedor.entity';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { uuidToBin, binToUuid, newUuidBin } from '../common/uuid/uuid-binary';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private repo: Repository<Proveedor>,
  ) {}

  async create(dto: CreateProveedorDto) {
    const prov = this.repo.create({
      proveedorId: newUuidBin(),
      empresaId: uuidToBin(dto.empresaId),
      nombre: dto.nombre,
      contacto: dto.contacto,
      email: dto.email,
      telefono: dto.telefono,
      direccion: dto.direccion,
    });
    await this.repo.save(prov);
    return {
      ...prov,
      proveedorId: binToUuid(prov.proveedorId),
    };
  }
  async findOne(id: string) {
    const prov = await this.repo.findOneBy({ proveedorId: uuidToBin(id) });
    return prov ? { ...prov, proveedorId: binToUuid(prov.proveedorId) } : null;
  }
}
