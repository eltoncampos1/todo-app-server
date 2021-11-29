import { v4 as uuid } from 'uuid'

class Todo {
  id?: string;
  content: string;
  isComplete: boolean;
  created_at: Date;
  updated_at?: Date;


  constructor(){
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { Todo };
