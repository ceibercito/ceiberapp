import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { Usuario } from '../usuario/usuario.entity';

@Entity('rol')
export class Rol {
  @PrimaryColumn({
    type: 'binary',
    length: 16,
    name: 'rolId',
  })
  rolId: Buffer;
  @Column({
    type: 'binary',
    length: 16,
    name: 'empresaId',
  })
  empresaId: Buffer;
  @Column({
    type: 'varchar',
    length: '255',
  })
  nombre: string;
  @Column({
    type: 'varchar',
    length: '255',
  })
  descripcion: string | null;

  @ManyToOne(() => Empresa)
  @JoinColumn({ name: 'empresaId' })
  empresa: Empresa;

  @ManyToMany(() => Usuario, (u) => u.roles)
  usuarios: Usuario[];
}
