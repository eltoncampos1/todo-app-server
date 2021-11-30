import { request, response, Router } from 'express'

import listTodoController from 'use-cases/list-todo'
import createTodoController from 'use-cases/create-todo'
import updateTodoController from 'use-cases/update-todo'
import deleteTodoController from 'use-cases/delete-todo'

const todoRoutes = Router();


todoRoutes.get('/list', (request, response) => listTodoController().handle(request, response))
todoRoutes.post('/create',(request, response) => createTodoController().handle(request, response))
todoRoutes.patch('/update/:todoId', (request, response) => updateTodoController().handle(request, response))
todoRoutes.delete('/delete/:todoId',(request, response) => deleteTodoController().handle(request, response))

export { todoRoutes }