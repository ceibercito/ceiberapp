import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProveedorDto {
  @IsString() @IsNotEmpty() empresaId: string;
  @IsString() @IsNotEmpty() nombre: string;
  @IsString() @IsOptional() contacto?: string;
  @IsEmail() @IsOptional() email?: string;
  @IsString() @IsOptional() telefono?: string;
  @IsString() @IsOptional() direccion?: string;
}
