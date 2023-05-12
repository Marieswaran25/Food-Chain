import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn
  } from "typeorm";
  
  @Entity("Otp")
  export class OTP extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    Createddate: Date;

    @Column()
    mobile: string;
  
    @Column()
    otp: string;
  
    @Column()
    status: string;
  }
  