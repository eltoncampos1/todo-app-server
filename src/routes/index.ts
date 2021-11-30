import { createTodoController, listTodoController, updateTodoController } from '../use-cases';
import { request, response, Router } from 'express'

const todoRoutes = Router();


todoRoutes.get('/list', (request, response) => listTodoController.handle(request, response))
todoRoutes.post('/create',(request, response) => createTodoController.handle(request, response))
todoRoutes.patch('/update/:todoId', (request, response) => updateTodoController.handle(request, response))

export { todoRoutes }