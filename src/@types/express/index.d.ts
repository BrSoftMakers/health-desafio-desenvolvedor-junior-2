import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      owner: {
        id: string;
        phone_number: string;
      };
    }
  }
}
