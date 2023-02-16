import {DataSource} from 'typeorm';
import {Authentication} from '../entities/Authentication/auth'
import { Profile } from '../entities/Profile/profile';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Venkat@2501",
    database: "exome",
    entities:[Authentication,Profile],
    synchronize:true
});