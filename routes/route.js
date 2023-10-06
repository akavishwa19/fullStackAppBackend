const express=require('express');
const {User}=require('../models/user');
const router=express.Router();

router.post('/',async (req,res)=>{
    try{
        let user=new User(req.body);
        user=await user.save();
        console.log('post successful');
        res.status(200).send(user);
    }
    catch (err){
        console.log(err);
        return res.status(500).send('server error');
    }
})

router.get('/',async (req,res)=>{
    try{
        let user=await User.find();
        console.log('get successful');
        return res.status(200).send(user);

    }
    catch (err){
        console.log(err);
        return res.status(500).send('server error');
    }
})

router.put('/',async (req,res)=>{
    try{
        let user= await User.findByIdAndUpdate(req.query.id,req.body);
        console.log(req.body);
        console.log(req.query.id);
        console.log(req.query);
        console.log('updated');
        return res.status(200).send('updated successfully');
    }
    catch (err){
        console.log(err);
        return res.status(500).send('server error');
    }
})

router.delete('/',async (req,res)=>{
    try{
        let user=await User.findByIdAndDelete(req.query.id);
        console.log(req.query.id);
        console.log(req.query);
        console.log('deleted succesfully');
        return res.status(200).send('deleted succesfully');

    }
    catch (err){
        console.log(err);
        return res.status(500).send('server error');
    }
})


module.exports=router;