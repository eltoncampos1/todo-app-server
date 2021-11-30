import { ICreateTodoDTO } from "DTOs/create-todo";
import { IDeleteTodoDTO } from "DTOs/delete-todo";
import { IUpdateTodoDTO } from "DTOs/update-todo";
import { Todo } from "src/entities/Todo";
import { ITodoRepository } from "src/repositories/todo";
import { getRepository, Repository } from "typeorm";


class TodoRepository implements ITodoRepository {
   private repository: Repository<Todo> 

    constructor() {
        this.repository = getRepository(Todo)
    }
   
    async list():Promise<Todo[]> {
       const todos = await this.repository.find()

       return todos
    }
    
    async create({ id ,content, isComplete }: ICreateTodoDTO): Promise<void> {

        const todo = this.repository.create({
            id,
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
        const todo = await this.repository.findOne({id: todoId})
        
        if(todo) {
            todo.updated_at = new Date()
            if(content) {
                todo.content = content as string
            }

            if(isComplete) {
                todo.isComplete = isComplete 
            }

            await this.repository.update({id: todo.id}, {content: todo.content, isComplete: todo.isComplete})
        }

    }

    async delete({todoId}: IDeleteTodoDTO): Promise<void> {
        const todo = await this.repository.findOne({id: todoId})

        if(todo) {
            await this.repository.delete({id: todo.id})
        } else {
            throw new Error()
        }

    }
    
}

export { TodoRepository }