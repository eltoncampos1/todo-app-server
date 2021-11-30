import { ICreateTodoDTO, IUpdateTodoDTO } from "../DTOs";
import { Todo } from "models/Todo"



interface ITodoRepository {
    create(data: ICreateTodoDTO): Todo
    list(): Todo[]
}

export { ITodoRepository }