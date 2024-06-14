export interface CustomErrorOptions {
  message: string;
  status: number;
}
// Classe para o erro customizado
export class CustomError extends Error {
  status: number;

  constructor({ message, status }: CustomErrorOptions) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
