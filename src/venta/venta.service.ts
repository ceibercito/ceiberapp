import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './venta.entity';
import { CreateVentaDto } from './dto/create-venta.dto';
import { uuidToBin, binToUuid } from '../common/uuid/uuid-binary';
import { newUuidBin } from '../common/uuid/uuid-binary';

@Injectable()
export class VentaService {
  constructor(@InjectRepository(Venta) private repo: Repository<Venta>) {}

  async create(dto: CreateVentaDto) {
    const venta = this.repo.create({
      ventaId: newUuidBin(),
      empresaId: uuidToBin(dto.empresaId),
      clienteId: dto.clienteId ? uuidToBin(dto.clienteId) : null,
      fecha: new Date(dto.fecha),
      total: parseFloat(dto.total),
      estado: dto.estado || 'pendiente',
    });
    await this.repo.save(venta);
    return { ...venta, ventaId: binToUuid(venta.ventaId) };
  }

  async findOne(id: string) {
    const v = await this.repo.findOneBy({ ventaId: uuidToBin(id) });
    return v ? { ...v, ventaId: binToUuid(v.ventaId) } : null;
  }
}
