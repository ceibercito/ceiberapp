import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Almacen } from './almacen.entity';
import { AlmacenService } from './almacen.service';
import { AlmacenController } from './almacen.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Almacen])],
  providers: [AlmacenService],
  controllers: [AlmacenController],
  exports: [AlmacenService],
})
export class AlmacenModule {}
