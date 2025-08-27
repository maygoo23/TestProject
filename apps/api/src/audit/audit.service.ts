import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuditService {
  constructor(private prisma: PrismaService) {}

  async log(actorUserId: number, entityType: string, entityId: number, action: string, diff: any) {
    await this.prisma.auditLog.create({
      data: {
        actorUserId,
        entityType,
        entityId,
        action: action as any,
        diff: JSON.stringify(diff),
      },
    });
  }
}
