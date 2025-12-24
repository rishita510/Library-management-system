const express= require('express');
const app = express();
const port=8081;

app.use(express.json());

app.get('/', (req, res) => {
   res.status(200).send({
    message: 'Welcome to Library Management System'
   })
})
app.all('*',(req,res) =>{
    res.status(500).json({
        message: 'not built yet'
    })
})

app.listen(port,() =>{
    console.log(`Server is running on port http://localhost:${port}`);
})