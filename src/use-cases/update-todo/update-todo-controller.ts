import { Request, Response } from "express";
import { UpdateTodoUseCase } from ".";

class UpdateTodoController {
    constructor(private updateTodoUseCase: UpdateTodoUseCase){}


    handle(request: Request, response: Response): Response {
        const {todoId} = request.params;

        const {content, isComplete} = request.body

        const todo = this.updateTodoUseCase.execute({content, isComplete, todoId })

        return response.status(200).json(todo)
    }
}

export { UpdateTodoController }