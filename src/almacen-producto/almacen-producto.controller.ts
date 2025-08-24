import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AlmacenProductoService } from './almacen-producto.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('almacenes-productos')
//@UseGuards(JwtAuthGuard)
export class AlmacenProductoController {
  constructor(private readonly service: AlmacenProductoService) {}

  @Post('asignar')
  asignar(
    @Body()
    body: {
      almacenId: string;
      productoId: string;
      stock?: number;
      stockMinimo?: number;
    },
  ) {
    return this.service.asignar(
      body.almacenId,
      body.productoId,
      body.stock ?? 0,
      body.stockMinimo ?? 0,
    );
  }
}
