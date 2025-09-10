import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { Rol } from '../rol/rol.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryColumn({ type: 'binary', length: 16, name: 'usuarioId' })
  usuarioId: Buffer;

  @Column({ type: 'binary', length: 16, name: 'empresaId' })
  empresaId: Buffer;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'boolean', default: true })
  activo: boolean;

  @ManyToOne(() => Empresa)
  @JoinColumn({ name: 'empresaId', referencedColumnName: 'empresaId' })
  empresa: Empresa;

  @ManyToMany(() => Rol)
  @JoinTable({
    name: 'usuario_rol',
    joinColumn: { name: 'usuarioId' },
    inverseJoinColumn: { name: 'rolId' },
  })
  roles: Rol[];
}
