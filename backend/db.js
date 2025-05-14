const mongoose=require("mongoose");
const dotenv=require("dotenv")
dotenv.config();
async function dbConnect(){
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected")
}
dbConnect();

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const Todo=mongoose.model("Todo",todoSchema)
module.exports={
    Todo
}