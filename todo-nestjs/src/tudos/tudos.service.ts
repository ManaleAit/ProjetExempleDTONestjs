import { Injectable, NotFoundException } from '@nestjs/common';
import {TodoRepo}  from './tudo.repository'
import { TodoDto} from './create.todo';

import {Tudo } from './tudo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {

  
  constructor(@InjectRepository(TodoRepo)
      
    private todoRepo : TodoRepo){}
 
 
 async createTodo(todoDto :TodoDto):Promise<Tudo>{

    return  await this.todoRepo.createTodo(todoDto);
      
  }

  async getAllTodos():Promise<Tudo[]>{
      return await  this.todoRepo.find();
  }

  async  getOnTudo(id:number){
      const found= await this.todoRepo.findOne(id);

      if(!found){

        throw new NotFoundException('this id ${id} is not found !! ')
      }
      return found;
  }

  async deleteTodo(id:number){

    const  todo=await this.getOnTudo(id);
     await this.todoRepo.remove(todo);
  }

  async  updateTodo (todoDto :TodoDto,id:number){

    const todo=await this.getOnTudo(id);
    const {tite}=todo;
    todo.tite=tite;
    await todo.save();

    return todo;
}

}
