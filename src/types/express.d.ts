/// <reference types="express" />

declare namespace Express {
  interface Request {
    user?: {
      id: string;
      role: string;
      isApproved?: boolean;
    };
  }
}