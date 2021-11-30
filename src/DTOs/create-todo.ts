interface ICreateTodoDTO {
  id?:string
  content: string;
  isComplete: boolean;
}

interface IUpdateTodoDTO {
  content: string;
  isComplete: boolean;
}

export { ICreateTodoDTO }