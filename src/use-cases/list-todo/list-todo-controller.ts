import { Request, Response} from 'express'

import { ListTodoUseCase } from "./list-todo";

class ListTodoController {
    constructor(private listTodoUseCase: ListTodoUseCase){}
    handle(request: Request, response: Response ): Response {
        const todos = this.listTodoUseCase.execute()


        return response.status(200).json(todos)
    }
}

export { ListTodoController }