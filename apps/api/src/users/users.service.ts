import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(email: string, password: string, role: string) {
    const hash = await bcrypt.hash(password, 10);
    return this.prisma.user.create({ data: { email, passwordHash: hash, role: role as any } });
  }

  async findAll() {
    return this.prisma.user.findMany({ select: { id: true, email: true, role: true } });
  }
}
