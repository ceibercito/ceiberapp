import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAlmacenDto {
  @IsString() @IsNotEmpty() empresaId: string;
  @IsString() @IsNotEmpty() nombre: string;
  @IsString() @IsNotEmpty() ubicacion: string;
  @IsNumber() @IsNotEmpty() capacidad: number;
  @IsString() @IsNotEmpty() responsable: string;
}
