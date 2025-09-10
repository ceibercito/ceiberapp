import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { Producto } from '../producto/producto.entity';

@Entity('proveedor')
export class Proveedor {
  @PrimaryColumn({ type: 'binary', length: 16 })
  proveedorId: Buffer;

  @Column({ type: 'binary', length: 16 })
  empresaId: Buffer;

  @Column() nombre: string;

  @Column({ nullable: true }) contacto: string;

  @Column({ nullable: true }) email: string;

  @Column({ nullable: true }) telefono: string;

  @Column({ nullable: true }) direccion: string;

  @ManyToOne(() => Empresa, (e) => e.proveedores)
  @JoinColumn({ name: 'empresaId' })
  empresa: Empresa;

  @OneToMany(() => Producto, (p) => p.proveedor)
  productos: Producto[];
}
