import {Entity,BaseEntity,Column,PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm'
import { NumericLiteral } from 'typescript';
import { Authentication } from '../Authentication/auth';

@Entity("Profile")
export class Profile extends BaseEntity{
@PrimaryGeneratedColumn("uuid")
profileid:string;
@Column()
Firstname:string;
@Column()
Lastname:string;
@Column()
phoneno:string;
@OneToOne(
    ()=>Authentication,
)
@JoinColumn({
    name:"userid"
})
userid:Authentication

}

