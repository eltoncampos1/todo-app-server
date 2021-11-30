import { TodoRepository } from "implementations/todo";
import { Todo } from "src/entities/Todo";
import { inject, injectable } from "tsyringe";

@injectable()
class ListTodoUseCase {
    constructor(
        @inject("TodoRepository")
        private todosRepository: TodoRepository
    ){}

    async execute():Promise<Todo[]> {
        return await this.todosRepository.list()
    }
}

export { ListTodoUseCase }