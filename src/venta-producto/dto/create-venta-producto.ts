import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreateVentaProductoDto {
  @IsString() @IsNotEmpty() ventaId: string;
  @IsString() @IsNotEmpty() productoId: string;
  @IsDecimal({ decimal_digits: '2' }) @IsNotEmpty() cantidad: string;
  @IsDecimal({ decimal_digits: '2' }) @IsNotEmpty() precio: string;
}
