import db from "../config/db/db.js";
import bcrypt from 'bcrypt'
import { generateToken } from "./auth.controller.js";
export async function createUser(req,res){
    const {name,email,password,role,profile_image,phone} = req.body;
    try{
        const userExist = await db.query('SELECT * FROM users WHERE email=$1',[email])
        if(userExist.rows.length>0) return res.json("user already exist");

        const hash = await bcrypt.hash(password,10);
        const user = await db.query('INSERT INTO users (name,email,password,role,profile_image,phone) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*',[name,email,hash,role,profile_image,phone]);
        const token = await generateToken(user.rows[0]);
        res.setHeader("Authorization",`Bearer ${token}`)
        return res.json({user:user.rows[0],token:token});

    }catch(err){
        console.log(err)
        return res.json({err:err.message});
    }
}

export async function loginUser(req,res) {
    const{email,password}=req.body;
    try{
        const User = await db.query('SELECT * FROM users WHERE email=$1',[email]);
        if(User.rows.length === 0) return res.json({success:false,message:"no user found"})
        
        const match = await bcrypt.compare(password,User.rows[0].password);
        if(!match) return res.json({success:false,message:"invalid email or password"});
        
        const token = await generateToken(User.rows[0]);
        res.setHeader("Authorization",`Bearer ${token}`)

        return res.json({success:true,message:"login successfull",user:User.rows[0],token:token});
    }catch(err){
        console.log(err);
        return res.json(err);
    }
}

