import { Entity, Column, PrimaryColumn } from 'typeorm';

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
}
