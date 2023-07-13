import express from "express"
import { dataRoute } from "./Routes/routes.js";
import dotenv from "dotenv"

dotenv.config()
//define port
const PORT = process.env.PORT
const app = express();

//http://localhost3200
// dbConnection()

//sample test request 
app.get("/", (req, res) => {
    res.send("connection made")

})
//midelwares
app.use(express.json());

//application middlewares
app.use("/", dataRoute)

//write a api for mentors

//listen a server 

app.listen(PORT, () => console.log(`server is working in localhost:${PORT}`))