import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VentaProductoService } from './venta-producto.service';
import { CreateVentaProductoDto } from './dto/create-venta-producto';

@Controller('venta-producto')
export class VentaProductoController {
  constructor(private readonly service: VentaProductoService) {}
  @Post()
  create(@Body() dto: CreateVentaProductoDto){
    return this.service.create(dto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
