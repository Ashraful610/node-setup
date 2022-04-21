const express = require('express')
const app = express()
const port = process.env.PORT || 5000 
const  cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/',(req , res) => {
    res.send('recap  setup node with programming ')
})

const users = [
    {id:1 , name:'tamim' ,email:'tamim@gmail.com'},
    {id:2 , name:'mohammad' ,email:'mohammad@gmail.com'},
    {id:3 , name:'musfiqur' ,email:'musfiqur@gmail.com'},
    {id:4 , name:'muin' ,email:'rahman@gmail.com'},
    {id:5 , name:'mehedi' ,email:'mehedi@gmail.com'},
    {id:6 , name:'miton' ,email:'miton@gmail.com'},
    {id:7 , name:'afif' ,email:'afif@gmail.com'}
]

app.get('/users' ,(req , res) => {
   if(req.query.name){
       const search = req.query.name.toLowerCase()
       const matched = users.filter(user => user.name.toLowerCase().includes
       (search))
       res.send(matched)
   }
   else{
    res.send(users)
   }
  
})

app.get('/user/:id',(req , res) => {
     const id  = parseInt(req.params.id)
     const user = users.filter(user => user.id === id)
    res.send(user)
})

app.post('/user' ,(req ,res) => {
    console.log('request',req.body)
    const user = req.body
    user.id = users.length + 1 ;
    users.push(user)
    res.send(user)
})

app.listen(port ,()=> {
    console.log('this is listen' ,port)
})