const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "bname":{type:String,required:true},
        "route":{type:String,required:true},
        "busNo":{type:String,required:true},
        "dname":{type:String,required:true}
    }
)

let busmodel=mongoose.model("buses",schema)
module.exports={busmodel}