import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { RolesGuard } from '../common/roles.guard';
import { Roles } from '../common/roles.decorator';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  constructor(private users: UsersService) {}

  @Roles('ADMIN')
  @Get()
  findAll() {
    return this.users.findAll();
  }

  @Roles('ADMIN')
  @Post()
  create(@Body() body: { email: string; password: string; role: string }) {
    return this.users.create(body.email, body.password, body.role);
  }
}
