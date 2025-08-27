import { PlaylistItem, RefType } from '@prisma/client';
import { CompiledSchedule } from '@signage/shared';

export function compileItems(items: PlaylistItem[]): CompiledSchedule['items'] {
  return items
    .sort((a, b) => a.position - b.position)
    .map((it) => ({
      id: it.id,
      type: it.refType === RefType.MEDIA ? 'MEDIA' : 'TEXT_SLIDE',
      src: '',
      durationMs: it.durationMs,
      transition: it.transition as any,
    }));
}
