import { DataSource } from "typeorm";

require('dotenv').config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST, 
    port: 5432,

    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD,
    database: process.env.POSTGRES_DB,

    synchronize: false,
    logging: true,

});

AppDataSource.initialize()
    .then(()=> console.log("Data Source initializerd"))
    .catch(err => console.error("Error during Data Souce initialization", err));
