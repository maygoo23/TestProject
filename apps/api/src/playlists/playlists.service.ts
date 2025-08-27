import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class PlaylistsService {
  constructor(private prisma: PrismaService, private audit: AuditService) {}

@Injectable()
export class PlaylistsService {
  constructor(private prisma: PrismaService) {}

  async list() {
    return this.prisma.playlist.findMany();
  }

  async create(name: string) {
    const playlist = await this.prisma.playlist.create({ data: { name, createdById: 1 } }); // TODO: use auth user
    await this.audit.log(1, 'Playlist', playlist.id, 'CREATE', { name });
    return playlist;
    return this.prisma.playlist.create({ data: { name, createdById: 1 } }); // TODO: use auth user
  }

  async setItems(id: number, items: { refType: string; refId: number; durationMs: number; position: number; transition: string }[]) {
    await this.prisma.playlistItem.deleteMany({ where: { playlistId: id } });
    for (const item of items) {
      await this.prisma.playlistItem.create({
        data: {
          playlistId: id,
          position: item.position,
          refType: item.refType as any,
          refId: item.refId,
          durationMs: item.durationMs,
          transition: item.transition as any,
        },
      });
    }
    await this.audit.log(1, 'Playlist', id, 'UPDATE', { items });
    return { ok: true };
  }
}
