declare module 'express' {
  export interface Request {
    session: any;
    user?: any;
    [key: string]: any;
  }
}

declare module 'bcrypt';
declare module 'passport-local';
declare module 'express-session';
declare module 'cookie-parser';

declare module '@signage/shared' {
  export type CompiledSchedule = any;
}

