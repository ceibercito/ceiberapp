import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { uuidToBin, binToUuid, newUuidBin } from '../common/uuid/uuid-binary';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private readonly repo: Repository<Empresa>,
  ) {}

  async create(dto: CreateEmpresaDto) {
    const empresa = this.repo.create({
      empresaId: newUuidBin(),
      nombre: dto.nombre,
      ruc: dto.ruc,
      direccion: dto.direccion,
    });
    await this.repo.save(empresa);
    return { ...empresa, empresaId: binToUuid(empresa.empresaId) };
  }

  async findOne(id: string) {
    const empresa = await this.repo.findOneBy({ empresaId: uuidToBin(id) });
    if (!empresa) return null;
    return { ...empresa, empresaId: binToUuid(empresa.empresaId) };
  }
}

