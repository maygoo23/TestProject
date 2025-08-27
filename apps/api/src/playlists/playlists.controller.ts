import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';

@Controller('playlists')
export class PlaylistsController {
  constructor(private playlists: PlaylistsService) {}

  @Get()
  list() {
    return this.playlists.list();
  }

  @Post()
  create(@Body() body: { name: string }) {
    return this.playlists.create(body.name);
  }

  @Post(':id/items')
  setItems(@Param('id') id: string, @Body() body: { items: any[] }) {
    return this.playlists.setItems(Number(id), body.items);
  }
}
