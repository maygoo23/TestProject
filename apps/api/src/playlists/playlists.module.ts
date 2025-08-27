import { Module } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { PlaylistsController } from './playlists.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [PlaylistsService, PrismaService],
  controllers: [PlaylistsController],
})
export class PlaylistsModule {}
