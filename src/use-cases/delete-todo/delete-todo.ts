import { IDeleteTodoDTO } from "DTOs/delete-todo";
import { TodoRepository } from "implementations/todo";

class DeleteTodoUseCase {
    constructor(private todoRepository: TodoRepository){}

    async execute({ todoId }:IDeleteTodoDTO): Promise<void> {
        await this.todoRepository.delete({ todoId })
    }
}

export { DeleteTodoUseCase }