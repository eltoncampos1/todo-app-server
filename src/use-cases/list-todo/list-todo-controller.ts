import { Request, Response} from 'express'
import { container } from 'tsyringe';

import { ListTodoUseCase } from "./list-todo";

class ListTodoController {
    async handle(request: Request, response: Response ): Promise<Response> {
        const listTodoUseCase = container.resolve(ListTodoUseCase)
        const todos = await listTodoUseCase.execute()

        return response.status(200).json(todos)
    }
}

export { ListTodoController }