
import env from "dotenv";
import { conn } from "./conn/conn.js";
import app from "./app.js";

env.config()
const port = process.env.PORT;



app.listen(port, async()=>{
    await conn();
    console.log(`sever work on http://localhost:${port}`)
}) 