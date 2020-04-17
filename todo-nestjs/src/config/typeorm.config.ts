
import {TypeOrmModuleOptions } from '@nestjs/typeorm';


export const typeormOptions: TypeOrmModuleOptions = {

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities:  [__dirname +'/../**/*.entity{.ts,.js}'],
    synchronize: true,

}