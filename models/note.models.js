import mongoose from "mongoose"

const noteschema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        trim:true
    },
    content:{
        type:String,
        require:true,
    }
},{
    timestamps:true
})

const note = mongoose.model("note",noteschema)
export default note