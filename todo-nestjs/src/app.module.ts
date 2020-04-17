import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TudosModule } from './tudos/tudos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {typeormOptions} from './config/typeorm.config';



@Module({
  imports: [
    TypeOrmModule.forRoot(typeormOptions),
    TudosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
