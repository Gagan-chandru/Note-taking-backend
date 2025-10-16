import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import noteroutes from './routes/note.route.js'

const app = express();
dotenv.config()
const port = 4001;

app.get('/',(req,res)=>{
    res.send("Backend is working")
})
try{
mongoose.connect(process.env.MONGO_URL);
console.log("connected to database")
}catch(err){
console.log("did not connect to database",err)
}
app.use(express.json())
app.use(cors())
app.use("/api/v1/noteapp",noteroutes)

app.listen(port,()=>{
    console.log(`app listening on ${port}`)
})