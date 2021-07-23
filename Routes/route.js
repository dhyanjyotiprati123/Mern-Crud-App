const express=require("express");

const router=express.Router();

const {getList,  createList, deleteTask, editList }= require("../Controller/controller");

router.get("/", getList);

router.post("/create", createList);

router.patch("/update/:id", editList);

router.delete("/delete/:id", deleteTask);



module.exports=router;