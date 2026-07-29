import express from 'express'
import { fetchIssue, newIssue } from '../controller/issue.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const issueRouter = express.Router();
issueRouter.post('/issue', verifyToken,newIssue); /*report issue of -- logged in user(current user) */
issueRouter.get('/issue',verifyToken,fetchIssue)    /*fething all issue of a particular user who is -- logged in user(current user)*/
export default issueRouter; 