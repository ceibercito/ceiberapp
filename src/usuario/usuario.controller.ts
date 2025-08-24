import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { UuidParamPipe } from '../common/uuid/uuid.pipe';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly service: UsuarioService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findById(@Param('id', UuidParamPipe) id: string) {
    return this.service.findById(id);
  }

  @Post()
  create(@Body() dto: CreateUsuarioDto) {
    return this.service.create(dto);
  }
}
