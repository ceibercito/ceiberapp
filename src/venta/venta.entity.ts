import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { ClienteEntity } from '../cliente/cliente.entity';
import { VentaProducto } from '../venta-producto/venta-producto.entity';

@Entity('venta')
export class Venta {
  @PrimaryColumn({ type: 'binary', length: 16, name: 'ventaId' })
  ventaId: Buffer;

  @Column({ type: 'binary', length: 16, name: 'empresaId' })
  empresaId: Buffer;

  @Column({ type: 'binary', length: 16, name: 'clienteId', nullable: true })
  clienteId: Buffer | null;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column({
    type: 'enum',
    enum: ['pendiente', 'completada', 'cancelada'],
    default: 'pendiente',
  })
  estado: 'pendiente' | 'completada' | 'cancelada';

  @ManyToOne(() => Empresa, (e) => e.ventas)
  @JoinColumn({ name: 'empresaId' })
  empresa: Empresa;

  @ManyToOne(() => ClienteEntity, (c) => c.ventas)
  @JoinColumn({ name: 'clienteId' })
  cliente: ClienteEntity;

  @OneToMany(() => VentaProducto, (vp) => vp.ventaId)
  productos: VentaProducto[];
}
