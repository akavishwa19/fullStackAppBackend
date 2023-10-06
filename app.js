const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.send('hi');
})

const db=require('./models');
db.mongoose.connect("mongodb://127.0.0.1").then((res)=>{
    console.log('connected to backend');
}).catch((res)=>{
    console.log('cant connect');
})

const user=require('./routes/route');
app.use('/user',user);

const port=3000;
app.listen(port,()=>{
    console.log('connected to port');
})