import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { AlmacenProducto } from '../almacen-producto/almacen-producto.entity';

@Entity('almacen')
export class Almacen {
  @PrimaryColumn({ type: 'binary', length: 16, name: 'almacenId' })
  almacenId: Buffer;

  @Column({ type: 'binary', length: 16, name: 'empresaId' })
  empresaId: Buffer;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  ubicacion: string | null;

  @Column({ type: 'int', nullable: true })
  capacidad: number | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  responsable: string | null;

  @ManyToOne(() => Empresa, (e) => e.almacenes)
  @JoinColumn({ name: 'empresaId' })
  empresa: Empresa;

  @OneToMany(() => AlmacenProducto, (ap) => ap.almacenId)
  productos: AlmacenProducto[];
}
