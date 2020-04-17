import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";


@Entity()
export class Tudo  extends  BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    tite:string;



}
