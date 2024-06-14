export interface CustomErrorOptions {
  message: string;
  status: number;
}
// Classe para o erro customizado
export class CustomError extends Error {
  status: number;
  message_error: string;

  constructor({ message, status }: CustomErrorOptions) {
    super(message);
    this.message_error = message; // Aqui definimos o campo message_error com o valor de message
    this.status = status;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
