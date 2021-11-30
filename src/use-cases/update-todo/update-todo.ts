import { IUpdateTodoDTO } from "DTOs/update-todo";
import { TodoRepository } from "implementations/todo";

class UpdateTodoUseCase {
    constructor(private todoRepository: TodoRepository){}

    execute({ todoId,content,isComplete }:IUpdateTodoDTO) {
        const todo = this.todoRepository.findById(todoId as string)

        if(todo) {

            if(content) {
                todo.content = content as string
            }

            if(isComplete) {
                todo.isComplete = isComplete 
            }

            return todo
        }

        return
    }
}

export { UpdateTodoUseCase }