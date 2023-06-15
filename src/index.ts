import http from 'http';
import { app } from './app';
import { env } from './config/env';
import database from './database/database';

const server = http.createServer(app);

server
    .listen()
    .on("listening", () => {
        console.log(`Server on port ${env.PORT}`);
        database;
    })
    .on("error", (error: Error) => {    
        console.log(error);
        process.exit(1);
    })