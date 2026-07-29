import jwt from 'jsonwebtoken';

export function verifyToken(req,res,next){
    const authHeader = req.headers.authorization;
    if(!authHeader) return res.json({success:false,message:"token missing"});

    const token = authHeader.split(" ")[1];
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        next();
    }catch(err){
        console.log(err);
        return res.json(err)
    }
}

// (forntend)               (generated)
// create user----->backend-------------token
// |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
//    (frontend)     <--- return (token) 
//         |
// 2nd req |
// (issue report)
//         |
//         |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ reported_ _  ^
//          pass the same token                                            | |
//              in headers          -----> verify token------------->------- |   
//         (received from backend)         (extract token        (token exist)
//         with the issue request           from header)                     |
//                    |                                                      | (no token)
//                    |                                                      | 
//                    |                                                      |---> not reported
//                    |-----> save the token in the 
//                    |         localStorage for
//                            further operation and
//                       prevent logout by refreshing page
//
//
//  1. get token from backend ----> using fetch/axios
//                            (like normal user data fetching)
//  2. save the token in localStorage:
//       sessionStorage.setItem("authToken", token);
//
//   3. send token to backend for different api call to:----> header 
//          (like new post new report)
//          const response = await fetch("https://yourdomain.com", {
 //             method: "GET",
  //            headers: {
    //                 "Authorization": `Bearer ${savedToken}`
  //                }
//              });
//
//
//
//
//
//
//