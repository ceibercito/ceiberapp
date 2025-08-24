import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioRolDto {
  @IsString() @IsNotEmpty() usuarioId: string;
  @IsString() @IsNotEmpty() rolId: string;
}
