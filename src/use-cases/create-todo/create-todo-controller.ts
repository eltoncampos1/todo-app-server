import { Request, Response} from 'express'
import {container} from 'tsyringe'
import { CreateTodoUseCase } from './create-todo'


class CreateTodoController {
  

    async handle(request: Request, response: Response): Promise<Response> {
        
        const { content, isComplete } = request.body

        const createTodoUseCase = container.resolve(CreateTodoUseCase)

        await createTodoUseCase.execute({
            content,
            isComplete
        })
        return response.status(201).send()
    }
}

export { CreateTodoController }