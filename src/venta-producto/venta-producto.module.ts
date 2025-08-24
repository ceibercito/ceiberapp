import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaProducto } from './venta-producto.entity';
import { VentaProductoService } from './venta-producto.service';
import { VentaProductoController } from './venta-producto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VentaProducto])],
  providers: [VentaProductoService],
  controllers: [VentaProductoController],
})
export class VentaProductoModule {}
