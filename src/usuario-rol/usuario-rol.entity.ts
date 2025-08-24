import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('usuario_rol')
export class UsuarioRolEntity {
  @PrimaryColumn({
    type: 'binary',
    length: 16,
    name: 'usuarioRolId',
  })
  usuarioRolId: Buffer;
  @Column({
    type: 'binary',
    length: 16,
    name: 'usuarioId',
  })
  usuarioId: Buffer;
  @Column({
    type: 'binary',
    length: 16,
    name: 'rolId',
  })
  rolId: Buffer;
}
