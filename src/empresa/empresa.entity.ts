import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { ClienteEntity } from '../cliente/cliente.entity';
import { Producto } from '../producto/producto.entity';
import { Proveedor } from '../proveedor/proveedor.entity';
import { Almacen } from '../almacen/almacen.entity';
import { Venta } from '../venta/venta.entity';

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

  @OneToMany(() => Usuario, (u) => u.empresaId) usuarios: Usuario[];
  @OneToMany(() => ClienteEntity, (c) => c.empresaId) clientes: ClienteEntity[];
  @OneToMany(() => Producto, (p) => p.empresaId) productos: Producto[];
  @OneToMany(() => Proveedor, (p) => p.empresaId) proveedores: Proveedor[];
  @OneToMany(() => Almacen, (a) => a.empresaId) almacenes: Almacen[];
  @OneToMany(() => Venta, (v) => v.empresaId) ventas: Venta[];
}
