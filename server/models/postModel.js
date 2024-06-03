const {Schema, model}=require("mongoose")
const { schema } = require("./userModel")


const postSchema= new Schema({
    title: {type: String, required: true},
    category: {type: String, enum:["Agriculture","Buisness","Education","Entertainment","Art","Investment","Uncategorized","Weather"],message:"{value is not supported"},
    description: {type: String, required: true},
    creator: {type: Schema.Types.ObjectId, ref: "User"},
    thumbnail: {type: String, required: true},
},{timestamps:true})

module.exports = model("Post",postSchema)