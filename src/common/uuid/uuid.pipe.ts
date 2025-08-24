import { BadRequestException, PipeTransform } from '@nestjs/common';

export class UuidParamPipe implements PipeTransform<string> {
  transform(value: string) {
    if (
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        value,
      )
    ) {
      throw new BadRequestException('UUID inválido');
    }
    return value.toLowerCase();
  }
}