import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('empresa')
export class Empresa {
  @PrimaryColumn({ type: 'binary', length: 16, name: 'empresaId' })
  empresaId: Buffer;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 20, nullable: true, unique: true })
  ruc: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  direccion: string | null;
}
