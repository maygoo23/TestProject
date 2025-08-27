import { RolesGuard } from '../src/common/roles.guard';

test('RolesGuard denies non-admin', () => {
  const reflector = { get: () => ['ADMIN'] } as any;
  const guard = new RolesGuard(reflector);
  const ctx: any = {
    getHandler: () => ({}),
    switchToHttp: () => ({ getRequest: () => ({ session: { user: { role: 'USER' } } }) }),
  };
  expect(guard.canActivate(ctx)).toBe(false);
});
