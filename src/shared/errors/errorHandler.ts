import { CustomError, CustomErrorOptions } from './ErrorBase';

export class TodoError extends CustomError {
  message_error: string;

  constructor({ message, status }: CustomErrorOptions) {
    super({ message, status });
    this.message_error = message; // Aqui definimos o campo message_error com o valor de message
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
