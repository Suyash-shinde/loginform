import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDb= async () =>{
    try {
        const connectStatus= await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`)
            console.log(`The database is connected`)
    } catch (error) {
        console.log("Error connecting to the database")
        process.exit(1);
    }
}

export default connectDb;
