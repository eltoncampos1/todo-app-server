import { ICreateTodoDTO } from "DTOs/create-todo";
import { Todo } from "models/Todo";
import { ITodoRepository } from "src/repositories/todo";


class TodoRepository implements ITodoRepository {
    private repository: Todo[]

    constructor() {
        this.repository = []
    }

    create({content, isComplete }: ICreateTodoDTO): Todo {

        const todo = new Todo()

        Object.assign(todo, {
            content,
            isComplete,
            created_at: new Date()
        })

        this.repository.push(todo)

        return todo
    }
    list():Todo[] {
        return this.repository
    }

}

export { TodoRepository }