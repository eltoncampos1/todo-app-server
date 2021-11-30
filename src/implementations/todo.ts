import { ICreateTodoDTO } from "DTOs/create-todo";
import { IUpdateTodoDTO } from "DTOs/update-todo";
import { Todo } from "models/Todo";
import { ITodoRepository } from "src/repositories/todo";


class TodoRepository implements ITodoRepository {
    private repository: Todo[]

    constructor() {
        this.repository = []
    }
   
    list():Todo[] {
        return this.repository
    }
    
    create({content, isComplete }: ICreateTodoDTO): Todo {

        const todo = new Todo()

        Object.assign(todo, {
            content,
            isComplete,
            created_at: new Date()
        })

        this.repository.push(todo)

        return todo
    }

    findById(id:string): Todo | undefined {
        const todo = this.repository.find(todo => todo.id === id )

        return todo
    }  

    update({todoId, content, isComplete}: IUpdateTodoDTO):Todo | undefined{
        const todo = this.findById(todoId as string)

        if(todo) {

            if(content) {
                todo.content = content as string
            }

            if(isComplete) {
                todo.isComplete = isComplete 
            }

            return todo
        }

        return
    }
    
 
}

export { TodoRepository }