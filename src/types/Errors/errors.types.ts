import {
  ErrorResponse,
  ResponseBadRequest,
  ResponseUnauthorized,
  ResponseForbidden,
  ResponseNotFound,
  ResponseNotAcceptable,
  ResponseInternalServerError,
  ResponseServiceUnavaliable,
} from '../Responses/responses.types';

export class GenericError extends Error {
  constructor(public ErrorResponse: ErrorResponse, message?: string) {
    super(message || 'Internal Server Error');
  }
}

export class BadRequest extends GenericError {
  constructor(message?: string, errorCode?: number | string) {
    super(new ResponseBadRequest(message, errorCode));
  }
}

export class UnauthorizedError extends GenericError {
  constructor(message?: string, errorCode?: number | string) {
    super(new ResponseUnauthorized(message, errorCode));
  }
}

export class Forbidden extends GenericError {
  constructor(message?: string, errorCode?: number | string) {
    super(new ResponseForbidden(message, errorCode));
  }
}

export class NotFound extends GenericError {
  constructor(message?: string, errorCode?: number | string) {
    super(new ResponseNotFound(message, errorCode));
  }
}
export class NotAcceptable extends GenericError {
  constructor(message?: string, errorCode?: number | string) {
    super(new ResponseNotAcceptable(message, errorCode));
  }
}

export class InternalServerError extends GenericError {
  constructor(message?: string, errorCode?: number | string) {
    super(new ResponseInternalServerError(message, errorCode));
  }
}

export class ServiceUnavaliable extends GenericError {
  constructor(message?: string, errorCode?: number | string) {
    super(new ResponseServiceUnavaliable(message, errorCode));
  }
}
