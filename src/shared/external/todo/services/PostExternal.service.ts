import { TodoError } from '../../../errors/errorHandler';
import { createPostDto } from '../dto/createPost.dto';
import { createdPostDto } from '../dto/createdPost.dto';

export class PostExternalService {
  constructor() {}

  async createPost(dto: createPostDto): Promise<createdPostDto | Error> {
    try {
      const { body, title, userId } = dto;
      throw new TodoError({ message: 'Problema bem louco que aconteceu aqui', status: 400 }); // Simulando um erro antes da requisição fetch

      const createPostDto: createPostDto = {
        userId,
        title,
        body,
      };

      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(createPostDto),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new TodoError({ message: '', status: 404 });
      }

      const responseData: createdPostDto = await response.json();
      console.log('Resposta:', responseData);

      return responseData;
    } catch (error) {
      if (error instanceof TodoError) {
        throw new TodoError(error);
      } else {
        throw new Error('Erro desconhecido ao criar post');
      }
    }
  }
}
