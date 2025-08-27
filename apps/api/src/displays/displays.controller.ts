import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { DisplaysService } from './displays.service';

@Controller('displays')
export class DisplaysController {
  constructor(private displays: DisplaysService) {}

  @Get()
  list() {
    return this.displays.list();
  }

  @Post()
  create(@Body() body: { name: string; slug: string; timezone: string }) {
    return this.displays.create(body.name, body.slug, body.timezone);
  }

  @Post(':id/assign')
  assign(@Param('id') id: string, @Body() body: { playlistId: number }) {
    return this.displays.assignPlaylist(Number(id), body.playlistId);
  }

  @Get(':slug/schedule')
  schedule(@Param('slug') slug: string) {
    return this.displays.compileSchedule(slug);
  }

  @Post(':slug/heartbeat')
  heartbeat(@Param('slug') slug: string, @Body() body: { version: string; state: string; latencyMs?: number }) {
    return this.displays.heartbeat(slug, body);
  }
}
