import { Module } from '@nestjs/common';
import { TudosController } from './tudos.controller';
import { TodoService } from './tudos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoRepo } from './tudo.repository';
@Module({
  imports : [TypeOrmModule.forFeature([TodoRepo])],
  controllers: [TudosController],
  providers: [TodoService],

})
export class TudosModule {}
