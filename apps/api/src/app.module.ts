import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DisplaysModule } from './displays/displays.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { PrismaService } from './prisma.service';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [AuthModule, UsersModule, DisplaysModule, PlaylistsModule, AuditModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
