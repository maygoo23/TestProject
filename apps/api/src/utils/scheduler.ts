export enum RefType {
  MEDIA = 'MEDIA',
  TEXT_SLIDE = 'TEXT_SLIDE',
}

interface PlaylistItemLike {
  id: number;
  position: number;
  refType: RefType;
  durationMs: number;
  transition: string;
}

export function compileItems(items: PlaylistItemLike[]) {
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

