import express, { Request, Response } from 'express';
import { PostExternalService } from './shared/external/todo/services/PostExternal.service';
import { createPostDto } from './shared/external/todo/dto/createPost.dto';
import { TodoError } from './shared/errors/errorHandler';

const app = express();
app.use(express.json());

const port = 8080;
app.get('/', async (req: Request, res: Response) => {
  try {
    const postExternalService = new PostExternalService();
    const dto: createPostDto = {
      title: 'teste',
      body: 'teste',
      userId: 1,
    };

    const responseData = await postExternalService.createPost(dto);
    res.send('Post criado com sucesso: ' + JSON.stringify(responseData));
  } catch (error) {
    console.error('Erro na rota:', error);
    if (error instanceof TodoError) {
      res.status(500).send(new TodoError(error));
    } else {
      res.status(500).send('Erro desconhecido ao criar post');
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
