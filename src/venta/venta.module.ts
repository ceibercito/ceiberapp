import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Venta } from './venta.entity';
import { VentaService } from './venta.service';
import { VentaController } from './venta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Venta])],
  providers: [VentaService],
  controllers: [VentaController],
})
export class VentaModule {}
