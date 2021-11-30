import { TodoRepository } from "implementations/todo";
import { CreateTodoUseCase } from "./create-todo";
import { CreateTodoController } from "./create-todo-controller";

export default (): CreateTodoController => {
   const todoRepository = new TodoRepository()
    
    const createTodoUseCase = new CreateTodoUseCase(todoRepository)
    const createTodoController = new CreateTodoController(createTodoUseCase) 

    return createTodoController
}