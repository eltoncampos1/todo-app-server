import { ICreateTodoDTO } from "../DTOs";
import { Todo } from "@models/Todo"



interface ITodoRepository {
    create(data: ICreateTodoDTO): Todo
}

export { ITodoRepository }