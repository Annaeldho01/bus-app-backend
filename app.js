const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcryptjs")
const {usermodel}=require("./models/register")

const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://anna:anna@cluster0.ld2gi.mongodb.net/busDB?retryWrites=true&w=majority&appName=Cluster0")

const generateHashedpassword = async(password)=>{
    const salt = await bcrypt.genSalt(10)//salt is a cost factor
    return bcrypt.hash(password,salt)
}

app.post("/reg",async(req,res)=>{
    let input=req.body
    let hashedPassword=await generateHashedpassword(input.password)
    console.log(hashedPassword)
    input.password=hashedPassword//this is for getting hashed password in db
    let register=new usermodel(input)
    register.save()
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("server started")
})