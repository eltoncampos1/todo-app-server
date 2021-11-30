import { TodoRepository } from "implementations/todo";
import { ListTodoUseCase } from "./list-todo";
import { ListTodoController } from "./list-todo-controller";

export default ():ListTodoController => {
    const todoRepository = new TodoRepository()

    const listTodoUseCase = new ListTodoUseCase(todoRepository)
    const listTodoController = new ListTodoController(listTodoUseCase)

    return listTodoController
}