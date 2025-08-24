import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/orm.config';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EmpresaModule } from './empresa/empresa.module';
import { RolModule } from './rol/rol.module';
import { UsuarioRolModule } from './usuario-rol/usuario-rol.module';
import { ProductoModule } from './producto/producto.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { AlmacenModule } from './almacen/almacen.module';
import { AlmacenProductoModule } from './almacen-producto/almacen-producto.module';
import { VentaModule } from './venta/venta.module';
import { ClienteModule } from './cliente/cliente.module';
import { VentaProductoModule } from './venta-producto/venta-producto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    AuthModule,
    UsuarioModule,
    EmpresaModule,
    RolModule,
    UsuarioRolModule,
    ProductoModule,
    ProveedorModule,
    AlmacenModule,
    AlmacenProductoModule,
    VentaModule,
    ClienteModule,
    VentaProductoModule,
  ],
})
export class AppModule {}
