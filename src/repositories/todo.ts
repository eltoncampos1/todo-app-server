import { ICreateTodoDTO, IDeleteTodoDTO, IUpdateTodoDTO } from "../DTOs";
import { Todo } from "src/entities/Todo"

interface ITodoRepository {
    create(data: ICreateTodoDTO): Promise<void> 
    list(): Promise<Todo[]>
    findById(id: string): Promise<Todo | undefined>
    update(data: IUpdateTodoDTO): Promise<void>
    delete:(data: IDeleteTodoDTO) => Promise<void>
}

export { ITodoRepository }