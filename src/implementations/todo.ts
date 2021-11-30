import { ICreateTodoDTO } from "DTOs/create-todo";
import { IDeleteTodoDTO } from "DTOs/delete-todo";
import { IUpdateTodoDTO } from "DTOs/update-todo";
import { Todo } from "src/entities/Todo";
import { ITodoRepository } from "src/repositories/todo";
import { getRepository, Repository } from "typeorm";


class TodoRepository implements ITodoRepository {
   private repository: Repository<Todo> 


   private static INSTACE: TodoRepository

    constructor() {
        this.repository = getRepository(Todo)
    }


    public static getInstance(): TodoRepository {
        if(!TodoRepository.INSTACE) {
            TodoRepository.INSTACE = new TodoRepository()
        }

        return TodoRepository.INSTACE
    }
   
    async list():Promise<Todo[]> {
       const todos = await this.repository.find()

       return todos
    }
    
    async create({content, isComplete }: ICreateTodoDTO): Promise<void> {

        const todo = await this.repository.create({
            content,
            isComplete: false
        })

        await this.repository.save(todo)

    }

    async findById(id:string): Promise<Todo | undefined> {
        const todo = await this.repository.findOne({ id })

        return todo
    }  

    async update({todoId, content, isComplete}: IUpdateTodoDTO):Promise<void>{
        const todo = await this.findById(todoId as string)

        if(todo) {
            todo.updated_at = new Date()
            if(content) {
                todo.content = content as string
            }

            if(isComplete) {
                todo.isComplete = isComplete 
            }
        }

        return
    }

    async delete({todoId}: IDeleteTodoDTO): Promise<void> {
        const todo = await this.findById(todoId)

        if(todo) {
            this.repository.softDelete(todo)
        } else {
            throw new Error()
        }

    }
    
}

export { TodoRepository }