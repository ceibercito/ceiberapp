import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAlmacenProductoDto {
  @IsString() @IsNotEmpty() almacenId: string;
  @IsString() @IsNotEmpty() productoId: string;
  @IsNumber() @IsNotEmpty() stock: number;
  @IsNumber() @IsNotEmpty() stock_minimo: number;
}
