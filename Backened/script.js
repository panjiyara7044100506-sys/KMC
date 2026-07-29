import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './src/config/db/db.js';
import userRouter from './src/Routes/user.js';
import issueRouter from './src/Routes/issue.js';
import dotenv from 'dotenv'
import adminRouter from './src/Routes/adminRouter/admin.js';
import authorityRouter from './src/Routes/authoritiesRouter/authority.router.js';
const app = express();
const port = 3000;

//middlewares
dotenv.config();
db.connect().then(console.log("db connected")); //db connection

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

// routes
app.use('/api/users',userRouter)
app.use('/api/user',issueRouter)
app.use('/api/admin',adminRouter)      
app.use('/api/authority',authorityRouter)

//test_server run
app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
})