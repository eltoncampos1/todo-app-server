import { TodoRepository } from "implementations/todo";
import { CreateTodoController, CreateTodoUseCase } from "./create-todo";
import { DeleteTodoController, DeleteTodoUseCase } from "./delete-todo";
import { ListTodoController, ListTodoUseCase } from "./list-todo";
import { UpdateTodoController, UpdateTodoUseCase } from "./update-todo";

const todoRepository = new TodoRepository()

const createTodoUseCase = new CreateTodoUseCase(todoRepository)
const createTodoController = new CreateTodoController(createTodoUseCase)

const listTodoUseCase = new ListTodoUseCase(todoRepository)
const listTodoController = new ListTodoController(listTodoUseCase)

const updateTodoUseCase = new UpdateTodoUseCase(todoRepository)
const updateTodoController = new UpdateTodoController(updateTodoUseCase)

const deleteTodoUseCase = new DeleteTodoUseCase(todoRepository)
const deleteTodoController = new DeleteTodoController(deleteTodoUseCase)



export { createTodoController, listTodoController, updateTodoController, deleteTodoController }