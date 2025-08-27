import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [PassportModule],
  providers: [AuthService, LocalStrategy, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
