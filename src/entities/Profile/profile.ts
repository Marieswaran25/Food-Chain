import {Entity,BaseEntity,Column,PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm'
import { Authentication } from '../Authentication/auth';

@Entity("Profile")
export class Profile extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    Profileid:string;

    @Column()
    Firstname:string;

    @Column()
    Lastname:string;
    
    @Column()
    phoneno:string;
}

