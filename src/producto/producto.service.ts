import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { uuidToBin, binToUuid, newUuidBin } from '../common/uuid/uuid-binary';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly repo: Repository<Producto>,
  ) {}

  async create(dto: CreateProductoDto) {
    const entity = this.repo.create({
      productoId: newUuidBin(),
      empresaId: uuidToBin(dto.empresaId),
      nombre: dto.nombre,
      categoria: dto.categoria,
      precio: dto.precio,
      costo: dto.costo,
      codigo: dto.codigo,
      proveedorId: uuidToBin(dto.proveedorId),
      stockInicial: dto.stockInicial,
      stokMinimo: dto.stokMinimo,
    });
    await this.repo.save(entity);
    return { ...entity, productoId: binToUuid(entity.productoId) };
  }

  async findOne(id: string) {
    const p = await this.repo.findOneBy({ productoId: uuidToBin(id) });
    if (!p) throw new NotFoundException('Producto no encontrado');
    return { ...p, productoId: binToUuid(p.productoId) };
  }
}
