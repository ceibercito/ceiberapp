import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { Venta } from '../venta/venta.entity';

@Entity('cliente')
export class ClienteEntity {
  @PrimaryColumn({ type: 'binary', length: 16, name: 'clienteId' })
  clienteId: Buffer;

  @Column({ type: 'binary', length: 16, name: 'empresaId' })
  empresaId: Buffer;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 50 })
  telefono: string;

  @Column({ type: 'varchar', length: 255 })
  direccion: string;

  @Column({ type: 'varchar', length: 100 })
  ciudad: string;

  @Column({
    type: 'enum',
    enum: ['minorista', 'mayorista'],
    default: 'minorista',
  })
  tipo: 'minorista' | 'mayorista';

  @ManyToOne(() => Empresa, (e) => e.clientes)
  @JoinColumn({ name: 'empresaId' })
  empresa: Empresa;

  @OneToMany(() => Venta, (v) => v.clienteId)
  ventas: Venta[];
}
