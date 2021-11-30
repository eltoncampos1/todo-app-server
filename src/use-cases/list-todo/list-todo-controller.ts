import { Request, Response} from 'express'

import { ListTodoUseCase } from "./list-todo";

class ListTodoController {
    constructor(private listTodoUseCase: ListTodoUseCase){}
    async handle(request: Request, response: Response ): Promise<Response> {
        const todos = await this.listTodoUseCase.execute()

        return response.status(200).json(todos)
    }
}

export { ListTodoController }