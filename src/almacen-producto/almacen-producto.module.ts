import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlmacenProducto } from './almacen-producto.entity';
import { AlmacenProductoService } from './almacen-producto.service';
import { AlmacenProductoController } from './almacen-producto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AlmacenProducto])],
  providers: [AlmacenProductoService],
  controllers: [AlmacenProductoController],
})
export class AlmacenProductoModule {}
