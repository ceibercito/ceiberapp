import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from './cliente.entity';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { binToUuid, newUuidBin, uuidToBin } from '../common/uuid/uuid-binary';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private repo: Repository<ClienteEntity>,
  ) {}

  async create(dto: CreateClienteDto) {
    const cliente = this.repo.create({
      clienteId: newUuidBin(),
      empresaId: uuidToBin(dto.empresaId),
      nombre: dto.nombre,
      email: dto.email,
      telefono: dto.telefono,
      direccion: dto.direccion,
      ciudad: dto.ciudad,
      tipo: dto.tipo,
    });
    await this.repo.save(cliente);
    return { ...cliente, clienteId: binToUuid(cliente.clienteId) };
  }

  async findOne(id: string) {
    const cliente = await this.repo.findOneBy({ clienteId: uuidToBin(id) });
    return cliente
      ? { ...cliente, clienteId: binToUuid(cliente.clienteId) }
      : null;
  }
}
