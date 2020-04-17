
import {Tudo } from './tudo.entity';

import {  Repository,EntityRepository} from "typeorm";
import { TodoDto } from './create.todo';


@EntityRepository(Tudo)

export class TodoRepo extends  Repository<Tudo >{



  async  createTodo(todoDto :TodoDto){

        const {tite}=todoDto;
        const todo=new Tudo ();
        todo.tite=todoDto.tite;
         await todo.save();
        return  todo;


    }
}


