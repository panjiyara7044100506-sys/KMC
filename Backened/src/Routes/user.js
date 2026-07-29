import express from "express";
import { createUser, loginUser } from "../controller/user.controller.js";

const userRouter = express.Router();
userRouter.post('/user/new_user',createUser);
userRouter.post('/login',loginUser);

export default userRouter;