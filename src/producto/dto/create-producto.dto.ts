import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductoDto {
  @IsString() @IsNotEmpty() empresaId: string;
  @IsString() @IsNotEmpty() nombre: string;
  @IsString() categoria: string;
  @IsNumber() precio: number;
  @IsNumber() costo: number;
  @IsString() codigo: string;
  @IsString() @IsOptional() proveedorId: string;
  @IsNumber() stockInicial: number;
  @IsNumber() stokMinimo: number;
}
