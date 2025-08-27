import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CompiledSchedule } from '@signage/shared';
import { compileItems } from '../utils/scheduler';

@Injectable()
export class DisplaysService {
  constructor(private prisma: PrismaService) {}

  async create(name: string, slug: string, timezone: string) {
    return this.prisma.display.create({ data: { name, slug, timezone } });
  }

  async list() {
    return this.prisma.display.findMany();
  }

  async heartbeat(slug: string, data: { version: string; state: string; latencyMs?: number }) {
    const display = await this.prisma.display.findUnique({ where: { slug } });
    if (!display) return null;
    await this.prisma.playerHeartbeat.create({
      data: {
        displayId: display.id,
        playerVersion: data.version,
        pageVisibilityState: data.state,
        approxLatencyMs: data.latencyMs,
      },
    });
    return { ok: true };
  }

  async assignPlaylist(id: number, playlistId: number) {
    return this.prisma.display.update({ where: { id }, data: { assignedPlaylistId: playlistId } });
  }

  async compileSchedule(slug: string): Promise<CompiledSchedule | null> {
    const display = await this.prisma.display.findUnique({
      where: { slug },
      include: {
        assignedPlaylist: {
          include: { items: true },
        },
      },
    });
    if (!display || !display.assignedPlaylist) return null;
    const playlist = display.assignedPlaylist;
    const items = compileItems(playlist.items as any);
    return {
      playlistId: playlist.id,
      updatedAt: playlist.updatedAt.toISOString(),
      items,
    };
  }
}
