export enum HttpStatus {
  Ok = 200,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  NotAcceptable = 406,
  InternalServerError = 500,
  ServiceUnavaliable = 503,
}

interface IErrorResponse {
  code?: number | string;
  message: string;
}

interface IResponseBody {
  error?: IErrorResponse | string;
}

abstract class Response<T extends IResponseBody> {
  constructor(
    public readonly status: number,
    private message?: string,
    private body?: T | any
  ) {}
}

export class ErrorResponse extends Response<any> {
  constructor(status: number, message: string, errorCode?: number | string) {
    const error: IErrorResponse = {
      message,
      code: errorCode,
    };
    super(status, undefined, { error });
  }
}

export class ResponseOk<T extends IResponseBody> extends Response<T> {
  constructor(msg?: string, data?: T | any) {
    super(HttpStatus.Ok, msg, data);
  }
}

export class ResponseUnauthorized extends ErrorResponse {
  constructor(msg?: string, errorCode?: number | string) {
    super(HttpStatus.Unauthorized, msg || 'Unauthorized', errorCode);
  }
}

export class ResponseBadRequest extends ErrorResponse {
  constructor(msg?: string, errorCode?: number | string) {
    super(HttpStatus.BadRequest, msg || 'Bad Request', errorCode);
  }
}

export class ResponseForbidden extends ErrorResponse {
  constructor(msg?: string, errorCode?: number | string) {
    super(HttpStatus.Forbidden, msg || 'Forbidden', errorCode);
  }
}

export class ResponseNotFound extends ErrorResponse {
  constructor(msg?: string, errorCode?: number | string) {
    super(HttpStatus.NotFound, msg || 'Not Founds', errorCode);
  }
}

export class ResponseNotAcceptable extends ErrorResponse {
  constructor(msg?: string, errorCode?: number | string) {
    super(HttpStatus.NotAcceptable, msg || 'Not Acceptable', errorCode);
  }
}

export class ResponseInternalServerError extends ErrorResponse {
  constructor(msg?: string, errorCode?: number | string) {
    super(
      HttpStatus.InternalServerError,
      msg || 'Internal ServerError',
      errorCode
    );
  }
}
export class ResponseServiceUnavaliable extends ErrorResponse {
  constructor(msg?: string, errorCode?: number | string) {
    super(
      HttpStatus.ServiceUnavaliable,
      msg || 'Service Unavaliable',
      errorCode
    );
  }
}
