import { IUpdateTodoDTO } from "DTOs/update-todo";
import { TodoRepository } from "implementations/todo";
import { Todo } from "models/Todo";

class UpdateTodoUseCase {
    constructor(private todoRepository: TodoRepository){}

    execute({ todoId,content,isComplete }:IUpdateTodoDTO): Todo | undefined {
        const todo = this.todoRepository.update({todoId, content, isComplete})

        if(todo) return todo 
    }   
}

export { UpdateTodoUseCase }