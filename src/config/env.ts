import { config } from 'dotenv';
config();


export const env = {
    PORT: process.env.PORT || 4000,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_CLUSTER: process.env.DB_CLUSTER,
    DB_NAME: process.env.DB_NAME,
}