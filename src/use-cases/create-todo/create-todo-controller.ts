import { AppError } from 'errors/AppError'
import { Request, Response} from 'express'
import {container} from 'tsyringe'
import { CreateTodoUseCase } from './create-todo'


class CreateTodoController {
  

    async handle(request: Request, response: Response): Promise<Response> {
        
        try {    
            const { content, isComplete } = request.body
    
            const createTodoUseCase = container.resolve(CreateTodoUseCase)
    
            await createTodoUseCase.execute({
                content,
                isComplete
            })
            return response.status(201).send()
        } catch (error) {
            throw new AppError("Can't create an todo without content")
        }

    }
}

export { CreateTodoController }