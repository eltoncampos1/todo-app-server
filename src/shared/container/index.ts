import { TodoRepository } from 'implementations/todo'
import { ITodoRepository } from 'src/repositories/todo'
import { container } from 'tsyringe'

container.registerSingleton<ITodoRepository>(
    "TodoRepository",
    TodoRepository
)