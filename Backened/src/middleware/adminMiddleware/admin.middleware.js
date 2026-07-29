
export function isAdmin(req,res,next){
    if(req.user.role !== "admin" || req.user.role=== null){
        return res.json({
            success:false,
            message:"Admin access denied"
        })
    }

    next();
}