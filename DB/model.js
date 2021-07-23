
const mongoose= require("mongoose");

const listSchema= new mongoose.Schema({
  title:{
      type: String,
      required: true
  },
  description:{
      type: String,
      required: true
  }
},{timestamps: true})

const List= new mongoose.model("List", listSchema);

module.exports=List;