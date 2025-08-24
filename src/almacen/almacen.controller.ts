import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { CreateAlmacenDto } from './dto/create-almacen.dto';

@Controller('almacen')
export class AlmacenController {
  constructor(private readonly almacenService: AlmacenService) {}
  @Post()
  create(@Body() dto: CreateAlmacenDto){
    return this.almacenService.create(dto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.almacenService.findOne(id);
  }
}
