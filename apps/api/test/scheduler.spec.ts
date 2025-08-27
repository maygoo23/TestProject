import { compileItems } from '../src/utils/scheduler';
import { Transition, RefType } from '@prisma/client';

test('compileItems orders by position', () => {
  const items = [
    { id: 2, position: 2, refType: RefType.MEDIA, durationMs: 1000, transition: Transition.FADE } as any,
    { id: 1, position: 1, refType: RefType.TEXT_SLIDE, durationMs: 2000, transition: Transition.FADE } as any,
  ];
  const compiled = compileItems(items);
  expect(compiled[0].id).toBe(1);
  expect(compiled[1].id).toBe(2);
});
