import { Controller, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { TodoService } from './tudos.service';
import { TodoDto} from './create.todo';
@Controller('tudos')
export class TudosController {


    constructor(private todoService:TodoService){}


    @Post("/")
    persistTodo(@Body() todoDto:TodoDto ){

        return this.todoService.createTodo(todoDto);
    }

    @Get("/get")
    getAll(){
        return this.todoService.getAllTodos();
    }

    @Get(':id')
    async  getTudo(@Param('id') myId:number){
        return  this.todoService.getOnTudo(myId);
    }
    
    @Delete(":id")

    deleteOneTodo(@Param('id')  id:number){

        this.todoService.deleteTodo(id);
    }

    @Put(":id")
    updateOneTodo(@Body() TodoDto:TodoDto,@Param('id')  myId:number){

        return this.todoService.updateTodo(TodoDto,myId);
    }


}
