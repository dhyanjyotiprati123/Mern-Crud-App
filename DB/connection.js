const mongoose=require("mongoose");

const address=process.env.URL;

const ConnectDB= async()=>{
    try{
       await mongoose.connect(address, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
     console.log(`server connected to database`);

    }catch(err){
        console.log(`cannot connect ${err}`);
    }
}

module.exports=ConnectDB;