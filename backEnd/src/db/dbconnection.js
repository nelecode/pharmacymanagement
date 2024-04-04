import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // const connect = await mongoose.connect(`mongodb+srv://nelectrom27:Mk7zxgy1bRApmMta@cluster0.hzvhtpr.mongodb.net/pharma`)
        console.log(`mongo db connected successfully... ${connect.connection.host}`)

    } catch (error) {
        console.log("mongodb connection error", error)
        process.exit(1)
    }

}

export default connectDB;

