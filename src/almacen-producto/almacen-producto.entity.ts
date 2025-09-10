import {
  Entity,
  Column,
  PrimaryColumn,
  Unique,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Almacen } from '../almacen/almacen.entity';
import { Producto } from '../producto/producto.entity';

@Entity('almacen_producto')
@Unique(['almacenId', 'productoId'])
export class AlmacenProducto {
  @PrimaryColumn({ type: 'binary', length: 16, name: 'almacenProductoId' })
  almacenProductoId: Buffer;

  @Column({ type: 'binary', length: 16, name: 'almacenId' })
  almacenId: Buffer;

  @Column({ type: 'binary', length: 16, name: 'productoId' })
  productoId: Buffer;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column({ type: 'int', name: 'stock_minimo', default: 0 })
  stockMinimo: number;

  @ManyToOne(() => Almacen, (a) => a.productos)
  @JoinColumn({ name: 'almacenId' })
  almacen: Almacen;

  @ManyToOne(() => Producto, (p) => p.almacenes)
  @JoinColumn({ name: 'productoId' })
  producto: Producto;
}
