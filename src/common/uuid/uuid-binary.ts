import { randomUUID } from 'crypto';

export function uuidToBin(uuid: string): Buffer {
  const hex = uuid.replace(/-/g, '');
  return Buffer.from(hex, 'hex');
}

export function binToUuid(buf: Buffer): string {
  const hex = buf.toString('hex');
  return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20)}`;
}

export function newUuidBin(): Buffer {
  return uuidToBin(randomUUID());
}
