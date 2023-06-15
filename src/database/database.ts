import { connect } from "mongoose";
import { env } from "../config/env";

export default (async () => {
    try {
        const db = await connect(`mongodb+srv://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_CLUSTER}/${env.DB_NAME}`);
        console.log(`Connect to ${db.connection.name}`)
    } catch (error) {
        throw new Error(error);
    }
})()