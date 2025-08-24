import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString() @IsNotEmpty() empresaId: string;
  @IsString() @IsNotEmpty() nombre: string;
  @IsEmail() @IsOptional() email?: string;
  @IsString() @IsOptional() telefono?: string;
  @IsString() @IsOptional() direccion?: string;
  @IsString() @IsOptional() ciudad?: string;
  @IsString() @IsNotEmpty() tipo: 'minorista' | 'mayorista';
}
