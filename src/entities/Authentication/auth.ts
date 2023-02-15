import { Entity, BaseEntity, Column,PrimaryGeneratedColumn } from "typeorm";

@Entity("Authentication")
export class Authentication extends BaseEntity {
    
    @PrimaryGeneratedColumn("uuid")
    userid: string

    @Column({unique:true})
    email: string

    @Column()
    password: string

    @Column()
    Active: boolean

    @Column()
    Createddate:Date
}
