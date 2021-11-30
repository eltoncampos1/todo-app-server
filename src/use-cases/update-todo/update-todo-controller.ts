import { AppError } from "errors/AppError";
import { Request, Response } from "express";
import { UpdateTodoUseCase } from ".";

class UpdateTodoController {
    constructor(private updateTodoUseCase: UpdateTodoUseCase){}


    async handle(request: Request, response: Response): Promise<Response> {
        const {todoId} = request.params;

        const {content, isComplete} = request.body

        try {
           await this.updateTodoUseCase.execute({content, isComplete, todoId })
    
            return response.status(200).send()
        } catch (error) {
            throw new AppError("This todo does not exists")
        }

    }
}

export { UpdateTodoController }