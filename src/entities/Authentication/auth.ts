import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import * as jwt from 'jsonwebtoken'
import { Profile } from "../Profile/profile";

@Entity("Authentication")
export class Authentication extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  userid: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  Active: boolean;

  @CreateDateColumn()
  Createddate: Date;

  @OneToOne(() => Profile)
  @JoinColumn({
    name: "profileid",
  })
  profileid: Profile;

  generatejwt (){
    return jwt.sign(
       {
         email:this.email
       },
       "secret",
       { expiresIn: "1h" }
     );
   };
}
