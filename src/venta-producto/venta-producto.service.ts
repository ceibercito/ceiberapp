import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VentaProducto } from './venta-producto.entity';
import { Repository } from 'typeorm';
import { CreateVentaProductoDto } from './dto/create-venta-producto';
import { binToUuid, newUuidBin, uuidToBin } from '../common/uuid/uuid-binary';

@Injectable()
export class VentaProductoService {
  constructor(
    @InjectRepository(VentaProducto)
    private repo: Repository<VentaProducto>,
  ) {}
  async create(dto: CreateVentaProductoDto) {
    const ventaProducto = this.repo.create({
      ventaProductoId: newUuidBin(),
      ventaId: uuidToBin(dto.ventaId),
      productoId: uuidToBin(dto.productoId),
      cantidad: parseFloat(dto.cantidad),
      precio: parseFloat(dto.precio),
    });
    await this.repo.save(ventaProducto);
    return {
      ...ventaProducto,
      ventaProductoId: binToUuid(ventaProducto.ventaProductoId),
    };
  }
  async findOne(id: string) {
    const ventaProducto = await this.repo.findOneBy({
      ventaProductoId: uuidToBin(id),
    });
    return ventaProducto
      ? {
          ...ventaProducto,
          ventaProductoId: binToUuid(ventaProducto.ventaProductoId),
        }
      : null;
  }
}
