import { TodoRepository } from "implementations/todo";
import { Todo } from "models/Todo";

class ListTodoUseCase {
    constructor(private todosRepository: TodoRepository){}

    execute():Todo[] {
        return this.todosRepository.list()
    }
}

export { ListTodoUseCase }