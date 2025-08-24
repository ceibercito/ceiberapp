import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('venta_producto')
export class VentaProducto {
  @PrimaryColumn({ type: 'binary', length: 16 })
  ventaProductoId: Buffer;

  @Column({ type: 'binary', length: 16 })
  ventaId: Buffer;

  @Column({ type: 'binary', length: 16 })
  productoId: Buffer;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;
}
