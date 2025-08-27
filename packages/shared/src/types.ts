export type Transition = 'FADE' | 'SLIDE' | 'ZOOM' | 'CROSSFADE';

export interface ScheduleItem {
  id: number;
  type: 'MEDIA' | 'TEXT_SLIDE';
  src: string; // signed URL or data URI
  durationMs: number;
  transition: Transition;
}

export interface CompiledSchedule {
  playlistId: number;
  updatedAt: string;
  items: ScheduleItem[];
}
