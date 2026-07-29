
export function isAuthority(req,res,next){
    if(req.user.role !=="authority"|| req.user.role===null){
        return res.json({
            success:false,
            message:"Authority access denied"
        })
    }
        next();
}