import { TodoRepository } from "implementations/todo";
import { Todo } from "src/entities/Todo";

class ListTodoUseCase {
    constructor(private todosRepository: TodoRepository){}

    async execute():Promise<Todo[]> {
        return await this.todosRepository.list()
    }
}

export { ListTodoUseCase }