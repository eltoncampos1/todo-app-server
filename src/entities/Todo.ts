import { Column, CreateDateColumn, Entity, PrimaryColumn,  UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'

@Entity('todos')
class Todo {

  @PrimaryColumn()
  id?: string;

  @Column()
  content: string;

  @Column()
  isComplete: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at?: Date;


  constructor(){
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { Todo };
