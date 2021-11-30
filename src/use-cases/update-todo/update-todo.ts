import { IUpdateTodoDTO } from "DTOs/update-todo";
import { TodoRepository } from "implementations/todo";
import { Todo } from "src/entities/Todo";

class UpdateTodoUseCase {
    constructor(private todoRepository: TodoRepository){}

    async execute({ todoId,content,isComplete }:IUpdateTodoDTO): Promise<void> {
       await this.todoRepository.update({todoId, content, isComplete})
    }   
}

export { UpdateTodoUseCase }