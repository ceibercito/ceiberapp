import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
