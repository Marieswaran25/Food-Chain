import {DataSource} from 'typeorm';
import {Authentication} from '../entities/Authentication/auth'
import { Foods } from '../entities/Food/food';
import { Hotels } from '../entities/Hotels/hotel';
import { Profile } from '../entities/Profile/profile';
import { OTP } from '../entities/otp/otp';


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Venkat@2501",
    database: "exome",
    entities:[Authentication,Profile,Hotels,Foods,OTP],
    synchronize:true
});