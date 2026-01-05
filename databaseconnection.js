const mongoose= require('mongoose');

function Dbconnection() {

    const DB_URL=process.env.MONGO_URI

    Mongoose.connect(DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    const db=mongoose.connection;
    db.on("error",console.error.bind(console,"connection error"))
    db.once("open",function(){
        console.log("db connected...")
    })
}

module.exports=Dbconnection;