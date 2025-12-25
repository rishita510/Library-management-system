const express= require('express');
// const user= require("./data/user.json");
const app = express();
const port=8081;
const userrouter=require("./routes/user")
const bookrouter=require("./routes/book")

app.use(express.json());

app.get('/', (req, res) => {
   res.status(200).send({
    message: 'Welcome to Library Management System'
   })
})

app.use("/user",userrouter)
app.use("/book",bookrouter)


app.listen(port,() =>{
    console.log(`Server is running on port http://localhost:${port}`);
})