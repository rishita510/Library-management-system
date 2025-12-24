const express= require('express');
const user= require("./data/user.json");
const app = express();
const port=8081;

app.use(express.json());

app.get('/', (req, res) => {
   res.status(200).send({
    message: 'Welcome to Library Management System'
   })
})
app.get('/user',(req,res) =>{
    res.status(200).json({
        success: true,
        data: user
    })
})

app.get('/user/:id',(req,res) =>{
    const id= req.params.id;
    const person= user.find((each) => each.id===Number(id));

    if(!user){
        return res.status(404).json({
            success:false,
            message: "Person not found"
        })
    }

  res.status(200).json({
    success:true,
    data: person
  })
})

app.post('/user',(req,res) =>{
    // "id": 4,
    // "name": "David Smith",
    // "email": "dsmith88@example.com",
    // "role": "Premium Member",
    // "purchased_books": [],
    // "account_status": "Active"
    const {id,name,email,role,purchased_books,account_status}= req.body;

    if(!id || !name || !email || !role || !purchased_books || !account_status){
        return res.status(400).json({
            success:false,
            message: "Please provide complete details"
        })
    }
    const newuser=user.find((each) => each.id===Number(id));
    if(newuser){
        return res.status(400).json({
            success:false,
            message: "User with this id already exists"
        })
    }
    user.push({id,name,email,role,purchased_books,account_status});
    res.status(201).json({
        success:true,
        data: user
    })
})
app.put('/user/:id',(req,res) =>{
    const id= req.params.id;
    const {name,email,role,purchased_books,account_status}= req.body;
    const person= user.find((each) => each.id===Number(id));

    if(!person){
        return res.status(404).json({
            success:false,
            message: "Person not found"
        })
    }
    const index= user.findIndex((each) => each.id===Number(id));
    user[index]={id,name,email,role,purchased_books,account_status};
    res.status(200).json({
        success:true,
        data: user
    })
})

app.listen(port,() =>{
    console.log(`Server is running on port http://localhost:${port}`);
})