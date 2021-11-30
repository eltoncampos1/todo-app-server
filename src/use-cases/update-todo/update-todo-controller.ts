import { AppError } from "errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTodoUseCase } from "./update-todo";


class UpdateTodoController {

    async handle(request: Request, response: Response): Promise<Response> {
        const {todoId} = request.params;

        const {content, isComplete} = request.body

        const updateTodoUseCase = container.resolve(UpdateTodoUseCase)

        await updateTodoUseCase.execute({content, isComplete, todoId })
    
        return response.status(200).send()
     
    }
}

export { UpdateTodoController }