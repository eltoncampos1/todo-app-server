import { AppError } from "errors/AppError";
import { Request, Response } from "express";
import { UpdateTodoUseCase } from "./update-todo";


class UpdateTodoController {
    constructor(private updateTodoUseCase: UpdateTodoUseCase){}


    async handle(request: Request, response: Response): Promise<Response> {
        const {todoId} = request.params;

        const {content, isComplete} = request.body

           await this.updateTodoUseCase.execute({content, isComplete, todoId })
    
            return response.status(200).send()
     
    }
}

export { UpdateTodoController }