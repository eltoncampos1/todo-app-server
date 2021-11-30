import { AppError } from "errors/AppError";
import { Request, Response } from "express";
import { DeleteTodoUseCase } from ".";

class DeleteTodoController {

    constructor(private deleteTodoUseCase: DeleteTodoUseCase){}

    async handle(request:Request, response: Response): Promise<Response> {
        const { todoId } = request.params;

        try {    
    
            await this.deleteTodoUseCase.execute({ todoId })
    
            return response.status(200).send()
        } catch (error) {
            throw new AppError("This todo does not exists")
        }

    }
}

export { DeleteTodoController }