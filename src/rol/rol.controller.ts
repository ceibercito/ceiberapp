import { Controller, Get, Param, Post, UseGuards, Body } from '@nestjs/common';
import { RolService } from './rol.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { UuidParamPipe } from '../common/uuid/uuid.pipe';
import { CreateRolDto } from './dto/create-rol.dto';

@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findById(@Param('id', UuidParamPipe) id: string) {
    return this.rolService.findById(id);
  }
  @Post()
  create(@Body() dto: CreateRolDto) {
    return this.rolService.create(dto);
  }
}
