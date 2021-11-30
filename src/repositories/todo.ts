import { ICreateTodoDTO, IDeleteTodoDTO, IUpdateTodoDTO } from "../DTOs";
import { Todo } from "src/entities/Todo"



interface ITodoRepository {
    create(data: ICreateTodoDTO): Todo
    list(): Todo[]
    update(data: IUpdateTodoDTO): Todo | undefined
    delete:(data: IDeleteTodoDTO) => void
}

export { ITodoRepository }