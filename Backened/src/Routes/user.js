import express from "express";
import { createUser, getProfile, loginUser } from "../controller/user.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const userRouter = express.Router();
userRouter.post('/user/new_user',createUser);
userRouter.post('/login',loginUser);
userRouter.get('/restoreuser',verifyToken,getProfile)

export default userRouter;