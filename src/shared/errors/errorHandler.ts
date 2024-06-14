import { CustomError, CustomErrorOptions } from './ErrorBase';

export class TodoError extends CustomError {
  constructor({ message, status }: CustomErrorOptions) {
    super({ message, status });
  }
}
