import { Request, Response, NextFunction } from 'express';
import { NotFound } from '../types/Errors/errors.types';

export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  throw new NotFound('Page Not Found!');
}
