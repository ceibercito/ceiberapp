import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { VentaService } from './venta.service';
import { CreateVentaDto } from './dto/create-venta.dto';

@Controller('ventas')
export class VentaController {
  constructor(private readonly service: VentaService) {}

  @Post()
  create(@Body() dto: CreateVentaDto) {
    return this.service.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
