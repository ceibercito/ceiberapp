import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRolDto {
  @IsString() @IsNotEmpty() empresaId: string;
  @IsString() @IsNotEmpty() nombre: string;
  @IsString() @IsOptional() descripcion: string;
}
