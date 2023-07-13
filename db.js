// import the mongo client 
import dotenv from "dotenv"
import { MongoClient } from "mongodb";
//paste the url get from the mongo db atlas 
dotenv.config()

const Mongostring = process.env.MONOG_URL
// const Mongostring = process.env.MONGO_URL
// create db connection 

async function dbConnection() {
    const client = new MongoClient(Mongostring);
    // give connect the connection made give close the connection close
    await client.connect();
    console.log("MongoDB connection gud")
    return client
}

export const client = await dbConnection();


