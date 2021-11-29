import { createTodoController } from '../use-cases';
import { Router } from 'express'

const todoRoutes = Router();


todoRoutes.post('/create',(request, response) => createTodoController.handle(request, response))

export { todoRoutes }