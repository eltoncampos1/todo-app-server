import { AppError } from 'errors/AppError';
import { Request, Response} from 'express'
import { CreateTodoUseCase } from './create-todo';


class CreateTodoController {
    constructor(private createTodoUseCase: CreateTodoUseCase){}

    handle(request: Request, response: Response): Response {
        
        const { content, isComplete } = request.body
        try {
            const todo =  this.createTodoUseCase.execute({
                content,
                isComplete
            })
            return response.status(201).json(todo)
        } catch (error) {
            throw new AppError("Cannot create a new Todo")
        }

    }
}

export { CreateTodoController }