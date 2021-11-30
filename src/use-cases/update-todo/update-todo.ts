import { IUpdateTodoDTO } from "DTOs/update-todo";
import { TodoRepository } from "implementations/todo";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateTodoUseCase {


    constructor(
        @inject("TodoRepository")
        private todoRepository: TodoRepository
    ){}

    async execute({ todoId,content,isComplete }:IUpdateTodoDTO): Promise<void> {
       await this.todoRepository.update({todoId, content, isComplete})
    }   
}

export { UpdateTodoUseCase }