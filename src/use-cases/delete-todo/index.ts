import { TodoRepository } from "implementations/todo";
import { DeleteTodoUseCase } from "./delete-todo";
import { DeleteTodoController } from "./delete-todo-controller";

export default():DeleteTodoController => {
    const todoRepository = new TodoRepository()
    const deleteTodoUseCase = new DeleteTodoUseCase(todoRepository)
    const deleteTodoController = new DeleteTodoController(deleteTodoUseCase)

    return deleteTodoController
}