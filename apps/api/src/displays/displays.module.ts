import { Module } from '@nestjs/common';
import { DisplaysService } from './displays.service';
import { DisplaysController } from './displays.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [DisplaysService, PrismaService],
  controllers: [DisplaysController],
})
export class DisplaysModule {}
