interface ICreateTodoDTO {
   id?: string;
  content: string;
  isComplete: boolean;
  created_at: Date;
  updated_at: Date;
}

export { ICreateTodoDTO }