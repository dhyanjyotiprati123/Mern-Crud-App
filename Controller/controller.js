
const List = require("../DB/model");

const getList=async(req,res)=>{
    try {
        const list= await List.find();
        if(!list){
           return res.status(402).send(`list is empty`)
        }

        res.status(200).send(list)
        
    } catch (error) {
        res.status(400).send(`cannot find ${error}`)
    }
}

const createList=async (req,res)=>{
   const { title, description }= req.body;
   try{
       if(!title || !description){
           res.status(400).send(`task cannot be empty`)
       }
       const newTask= new List({title, description});
       await newTask.save();
       res.status(201).send(newTask)

   }catch(err){
       res.status(401).send(`cannot create ${err}`)
   }
}

const deleteTask= async(req, res)=>{
    try{
       const task= await List.findById(req.params.id);
       if(!task){
           return res.status(400).send(`couldn't find any task by this id`)
       }
       await task.delete();
       res.status(200).send(`your task has been deleted`);

    }catch(err){
        res.status(400).send(`cannot delete ${err}`)
    }
}

const editList= async(req, res)=>{
    const update= req.body;
    console.log(update);
    try {
      
        const Task= await List.findByIdAndUpdate(req.params.id, {$set: update}, {new: true})
         
        res.status(201).send(`new task : ${Task}`);
        
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getList=getList;
exports.createList=createList;
exports.deleteTask=deleteTask;
exports.editList=editList;