import { UsuarioRolService } from './usuario-rol.service';
import { UseGuards, Controller, Get, Param, Post, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { UuidParamPipe } from '../common/uuid/uuid.pipe';
import { CreateUsuarioRolDto } from '../usuario-rol/dto/create-usuario-rol.dto';

@Controller('usuario-rol')
export class UsuarioRolController {
  constructor(private readonly usuarioRol: UsuarioRolService) {}
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findById(@Param('id', UuidParamPipe) id: string) {
    return this.usuarioRol.findById(id);
  }
  @Post()
  create(@Body() dto: CreateUsuarioRolDto) {
    return this.usuarioRol.create(dto);
  }
}
