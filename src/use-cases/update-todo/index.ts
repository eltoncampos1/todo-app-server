import { TodoRepository } from "implementations/todo";
import { UpdateTodoUseCase } from "./update-todo";
import { UpdateTodoController } from "./update-todo-controller";

export default(): UpdateTodoController => {
    const todoRepository = new TodoRepository()

   
    const updateTodoUseCase = new UpdateTodoUseCase(todoRepository)
    const updateTodoController = new UpdateTodoController(updateTodoUseCase)
    
    return updateTodoController
}