import { ICreateTodoDTO } from "DTOs/create-todo";
import { ITodoRepository } from "src/repositories/todo";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateTodoUseCase {
    constructor(
        @inject("TodoRepository")
        private todoRepository: ITodoRepository
    ){}

    async execute({content, isComplete}: ICreateTodoDTO): Promise<void> {

        if(!content) {
            throw new Error()
        }

      await this.todoRepository.create({ content, isComplete })

    }
}

export { CreateTodoUseCase }