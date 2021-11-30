import { IDeleteTodoDTO } from "DTOs/delete-todo";
import { TodoRepository } from "implementations/todo";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteTodoUseCase {

    constructor(
        @inject("TodoRepository")
        private todoRepository: TodoRepository
    ){}

    async execute({ todoId }:IDeleteTodoDTO): Promise<void> {
        await this.todoRepository.delete({ todoId })
    }
}

export { DeleteTodoUseCase }