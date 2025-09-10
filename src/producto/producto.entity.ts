import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { Proveedor } from '../proveedor/proveedor.entity';
import { AlmacenProducto } from '../almacen-producto/almacen-producto.entity';
import { VentaProducto } from '../venta-producto/venta-producto.entity';

@Entity('producto')
export class Producto {
  @PrimaryColumn({ type: 'binary', length: 16, name: 'productoId' })
  productoId: Buffer;

  @Column({ type: 'binary', length: 16, name: 'empresaId' })
  empresaId: Buffer;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  categoria: string | null;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number; // TypeORM devuelve string para DECIMAL

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  costo: number;

  @Column({ type: 'varchar', length: 100, nullable: true, unique: true })
  codigo: string | null;

  @Column({ type: 'binary', length: 16, name: 'proveedorId', nullable: true })
  proveedorId: Buffer | null;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  stockInicial: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  stokMinimo: number;

  // Relaciones
  @ManyToOne(() => Empresa)
  @JoinColumn({ name: 'empresaId', referencedColumnName: 'empresaId' })
  empresa: Empresa;

  @ManyToOne(() => Proveedor)
  @JoinColumn({ name: 'proveedorId', referencedColumnName: 'proveedorId' })
  proveedor: Proveedor;

  @OneToMany(() => AlmacenProducto, (ap) => ap.productoId)
  almacenes: AlmacenProducto[];

  @OneToMany(() => VentaProducto, (vp) => vp.productoId)
  ventas: VentaProducto[];
}
