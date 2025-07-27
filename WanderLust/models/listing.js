const mongoose=require("mongoose");
const   Schema=mongoose.Schema;
const listingSchema=new Schema({
    title :{
       type: String,
       required:true
    },
    description:String,
    image:{
        default:"https://images.unsplash.com/photo-1736344398782-0107cd2ca611?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type:String,
        set: (v)=>v=== "" ? "https://images.unsplash.com/photo-1736344398782-0107cd2ca611?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
         : v, 
    },
    price:Number,
    location:String,
    country:String,
    });
module.exports=mongoose.model("Listing",listingSchema);