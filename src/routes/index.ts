import { request, response, Router } from 'express'


import { CreateTodoController } from 'use-cases/create-todo/create-todo-controller';
import { DeleteTodoController } from 'use-cases/delete-todo/delete-todo-controller';
import { ListTodoController } from 'use-cases/list-todo/list-todo-controller';
import { UpdateTodoController } from 'use-cases/update-todo/update-todo-controller';

const todoRoutes = Router();

const listTodoController = new ListTodoController()
const createTodoController = new CreateTodoController()
const updateTodoController = new UpdateTodoController()
const deleteTodoController = new DeleteTodoController()

todoRoutes.get('/list',  listTodoController.handle)
todoRoutes.post('/create', createTodoController.handle)
todoRoutes.patch('/update/:todoId', updateTodoController.handle)
todoRoutes.delete('/delete/:todoId', deleteTodoController.handle)

export { todoRoutes }