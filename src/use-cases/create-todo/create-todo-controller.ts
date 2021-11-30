import { AppError } from 'errors/AppError';
import { Request, Response} from 'express'
import { CreateTodoUseCase } from './create-todo';


class CreateTodoController {
    constructor(private createTodoUseCase: CreateTodoUseCase){}

    async handle(request: Request, response: Response): Promise<Response> {
        
        const { content, isComplete } = request.body

        await this.createTodoUseCase.execute({
            content,
            isComplete
        })
        return response.status(201).send()
    }
}

export { CreateTodoController }