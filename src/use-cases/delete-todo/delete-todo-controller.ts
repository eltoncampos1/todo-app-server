import { AppError } from "errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTodoUseCase } from "./delete-todo";


class DeleteTodoController {
    async handle(request:Request, response: Response): Promise<Response> {
        const { todoId } = request.params;
        const deleteTodoUseCase = container.resolve(DeleteTodoUseCase)
        try {    
    
            await deleteTodoUseCase.execute({ todoId })
    
            return response.status(200).send()
        } catch (error) {
            throw new AppError("This todo does not exists")
        }

    }
}

export { DeleteTodoController }