import { ICreateTodoDTO } from "DTOs/create-todo";
import { TodoRepository } from "implementations/todo";
import { Todo } from "models/Todo";
import { ITodoRepository } from "src/repositories/todo";


class CreateTodoUseCase {
    constructor(private todoRepository: ITodoRepository){}

    execute({content, isComplete }: ICreateTodoDTO): Todo {
        if(!content) {
            throw new Error()
        }

        const todo = this.todoRepository.create({ content, isComplete })

        return todo
    }
}

export { CreateTodoUseCase }