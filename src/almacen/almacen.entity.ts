import { Entity, Column, PrimaryColumn } from 'typeorm';

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
}
