import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEmpresaDto {
  @IsString() @IsNotEmpty() nombre: string;
  @IsString() @IsNotEmpty() ruc: string;
  @IsString() @IsOptional() direccion?: string;
}