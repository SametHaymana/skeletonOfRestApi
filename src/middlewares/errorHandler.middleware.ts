import { Request, Response, NextFunction } from 'express';
import { GenericError } from '../types/Errors/errors.types';
import {
  HttpStatus,
  ResponseInternalServerError,
} from '../types/Responses/responses.types';

export function handleErrors(
  err: GenericError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err.stack);

  // Send Response
  if (!err.ErrorResponse) {
    return res
      .status(HttpStatus.InternalServerError)
      .json(new ResponseInternalServerError());
  }

  return res.status(err.ErrorResponse.status).json(err.ErrorResponse);
}
