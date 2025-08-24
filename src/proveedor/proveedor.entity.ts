import { Entity, Column, PrimaryColumn } from 'typeorm';

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
}
