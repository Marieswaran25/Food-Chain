import {Entity,BaseEntity,Column,PrimaryGeneratedColumn} from 'typeorm'

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

