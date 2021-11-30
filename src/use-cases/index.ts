import { TodoRepository } from "implementations/todo";
import { CreateTodoController, CreateTodoUseCase } from "./create-todo";
import { ListTodoController, ListTodoUseCase } from "./list-todo";
import { UpdateTodoController, UpdateTodoUseCase } from "./update-todo";

const todoRepository = new TodoRepository()
const createTodoUseCase = new CreateTodoUseCase(todoRepository)
const listTodoUseCase = new ListTodoUseCase(todoRepository)
const listTodoController = new ListTodoController(listTodoUseCase)

const updateTodoUseCase = new UpdateTodoUseCase(todoRepository)
const updateTodoController = new UpdateTodoController(updateTodoUseCase)

const createTodoController = new CreateTodoController(createTodoUseCase)


export { createTodoController, listTodoController, updateTodoController }