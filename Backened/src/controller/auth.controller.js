import jwt from 'jsonwebtoken'

export async function generateToken(user){
   return jwt.sign(user,process.env.JWT_SECRET,{expiresIn:"7d"})
}