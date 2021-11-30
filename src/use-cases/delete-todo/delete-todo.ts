import { IDeleteTodoDTO } from "DTOs/delete-todo";
import { TodoRepository } from "implementations/todo";

class DeleteTodoUseCase {
    constructor(private todoRepository: TodoRepository){}

    execute({ todoId }:IDeleteTodoDTO): void {
        this.todoRepository.delete({ todoId })
    }
}

export { DeleteTodoUseCase }