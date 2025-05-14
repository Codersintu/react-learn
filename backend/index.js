const express=require("express")
const { createTodo, updateTodo  }=require("./types");
const { Todo } = require("./db");
const cors=require("cors")
const app=express();
app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173"
}))

 app.post("/todo",(req,res)=>{
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg:"you sent the wrong input",
        })
        return;
    }
    Todo.create({
        title:createPayload.title,
        description:createPayload.description
    })
    res.json({
        msg:"Todo created"
    })

 })

 app.get("/todo",async(req,res)=>{
    const tod=await Todo.find({})
    res.json({
        tod,
    })
 })

 app.put("/update",async(req,res)=>{
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }

    await Todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({msg:"TODO marked as a done"})
 })
const PORT=5000;
app.listen(PORT,(req,res)=>{
    console.log(`running port number ${PORT}`);
})