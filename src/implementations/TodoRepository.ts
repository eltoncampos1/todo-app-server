import { ICreateTodoDTO } from "@DTOs/ICreateTodoDTO";
import { Todo } from "@models/Todo";
import { ITodoRepository } from "src/repositories/TodosRepositories";


class TodoRepository implements ITodoRepository {
    private repository: Todo[]

    constructor() {
        this.repository = []
    }

    create({content,isComplete, created_at}: ICreateTodoDTO): Todo {

        const todo = new Todo()

        Object.assign(todo, {
            content,
            isComplete: false,
            created_at: new Date()
        })

        this.repository.push(todo)

        return todo
    }
}

export { TodoRepository }