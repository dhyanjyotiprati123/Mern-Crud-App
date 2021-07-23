require('dotenv').config();

const express=require("express");
const app= express();
const port = process.env.PORT;
const cors=require("cors");
const ConnectDB =require("./DB/connection");

ConnectDB();
const Routes = require("./Routes/route");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(Routes);

app.listen(port, ()=>{
    console.log(`server started at port no : ${port}`);
})
