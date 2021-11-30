interface IUpdateTodoDTO {
  todoId?: string | undefined;
  content?: string;
  isComplete: boolean;
}

export { IUpdateTodoDTO }