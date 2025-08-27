import { Controller, Post, UseGuards, Req, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request) {
    req.session.user = req.user;
    return { user: req.user };
  }

  @Post('logout')
  logout(@Req() req: Request) {
    req.session.destroy(() => {});
    return { ok: true };
  }

  @Get('me')
  me(@Req() req: Request) {
    return { user: req.session.user || null };
  }
}
