import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Venta } from '../venta/venta.entity';
import { Producto } from '../producto/producto.entity';

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

  @ManyToOne(() => Venta, (v) => v.productos)
  @JoinColumn({ name: 'ventaId' })
  venta: Venta;

  @ManyToOne(() => Producto, (p) => p.ventas)
  @JoinColumn({ name: 'productoId' })
  producto: Producto;
}
