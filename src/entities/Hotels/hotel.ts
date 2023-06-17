import {Entity,BaseEntity,Column,PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm'

@Entity("Hotels")
export class Hotels extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    Hotelid:string;

    @CreateDateColumn()
    Createddate: Date;

    @Column()
    hotelname:string;

    @Column()
    address:string;
    
    @Column()
    mobile:string;

    @Column()
    ratings:Number

    @Column()
    type:string
}