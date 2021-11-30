import { AppError } from 'errors/AppError';
import { Request, Response} from 'express'
import { CreateTodoUseCase } from './create-todo';


class CreateTodoController {
    constructor(private createTodoUseCase: CreateTodoUseCase){}

    async handle(request: Request, response: Response): Promise<Response> {
        
        const { content, isComplete } = request.body
        try {
            await this.createTodoUseCase.execute({
                content,
                isComplete
            })
            return response.status(201).send()
        } catch (error) {
            throw new AppError("Cannot create a new Todo")
        }

    }
}

export { CreateTodoController }