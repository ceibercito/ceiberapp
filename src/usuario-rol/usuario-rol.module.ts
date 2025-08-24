import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRolEntity } from './usuario-rol.entity';
import { UsuarioRolService } from './usuario-rol.service';
import { UsuarioRolController } from './usuario-rol.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioRolEntity])],
  providers: [UsuarioRolService],
  controllers: [UsuarioRolController],
  exports: [UsuarioRolService],
})
export class UsuarioRolModule {}
