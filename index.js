const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const connect = require('./db/mongoDB');
const morgan = require('morgan');
const USERROLE = require('./model/userRoleModel');
const userRouter = require('./router/userRouter');
const cors = require('cors')

// middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// API'S

app.use('/',userRouter)



app.get('/', (req, res)=> {
    res.send('welcome home')
  })


//db connection and server
connect()
.then(()=>{
    try{

        app.listen(port,()=> console.log(`server connected successfully to http://localhost:${port}`));

    }catch(error){
        console.log('cannot connect to the server');
    }
})

