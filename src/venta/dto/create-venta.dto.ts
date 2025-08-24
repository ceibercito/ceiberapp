import {
  IsDateString,
  IsDecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateVentaDto {
  @IsString() @IsNotEmpty() empresaId: string;
  @IsString() @IsOptional() clienteId?: string;
  @IsDateString() @IsNotEmpty() fecha: string;
  @IsDecimal({ decimal_digits: '2' }) total: string;
  @IsString() estado: 'pendiente' | 'completada' | 'cancelada';
}
