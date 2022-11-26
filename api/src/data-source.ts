import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    extra: {
        ssl: {
            rejectUnauthorized: false,
            ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString(),
            key: fs.readFileSync('/path/to/client-key/postgresql.key').toString(),
            cert: fs.readFileSync('/path/to/client-certificates/postgresql.crt').toString(),
          },
    },
    synchronize: true,
    logging: true,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`]

})