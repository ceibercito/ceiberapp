import { Entity, Column, PrimaryColumn } from 'typeorm';

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
}
