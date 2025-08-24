import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlmacenProducto } from './almacen-producto.entity';
import { newUuidBin, uuidToBin, binToUuid } from '../common/uuid/uuid-binary';

@Injectable()
export class AlmacenProductoService {
  constructor(
    @InjectRepository(AlmacenProducto)
    private repo: Repository<AlmacenProducto>,
  ) {}

  async asignar(
    almacenId: string,
    productoId: string,
    stock = 0,
    stockMinimo = 0,
  ) {
    const entity = this.repo.create({
      almacenProductoId: newUuidBin(),
      almacenId: uuidToBin(almacenId),
      productoId: uuidToBin(productoId),
      stock,
      stockMinimo,
    });
    const saved = await this.repo.save(entity);
    return { ...saved, almacenProductoId: binToUuid(saved.almacenProductoId) };
  }
}
