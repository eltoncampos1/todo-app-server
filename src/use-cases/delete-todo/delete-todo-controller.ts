import { Request, Response } from "express";
import { DeleteTodoUseCase } from ".";

class DeleteTodoController {

    constructor(private deleteTodoUseCase: DeleteTodoUseCase){}

    handle(request:Request, response: Response): Response {
        const { todoId } = request.params;

        this.deleteTodoUseCase.execute({ todoId })

        return response.status(200).send()
    }
}

export { DeleteTodoController }