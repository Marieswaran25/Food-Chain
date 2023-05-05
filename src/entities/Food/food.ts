import { BaseEntity, Column, Entity,JoinColumn,OneToOne,PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Hotels } from "../Hotels/hotel";

@Entity('Foods')
export class Foods extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column('json')
    food:JSON

    @Column({unique:false})
    hotelname: string;
    
    @OneToOne(() =>Hotels)
    @JoinColumn({
      name: "Hotelid",
    })
    hotelhotelid: Hotels;
}