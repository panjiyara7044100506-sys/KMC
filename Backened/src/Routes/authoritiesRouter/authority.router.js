import express from 'express'
import { verifyToken } from '../../middleware/auth.middleware.js';
import { isAuthority } from '../../middleware/authority/authority.middleware.js';
import { fetchAssignmentTable, getIssue, IssueByDepartName, updateStatus } from '../../controller/authorities/authorities.controller.js';

const authorityRouter = express.Router();
authorityRouter.get('/issue',verifyToken,isAuthority,getIssue); //no-use - invalid---------------------------
authorityRouter.get('/issue/department/:issue_category',verifyToken,isAuthority,IssueByDepartName)  //      |
authorityRouter.put('/issue/update_status',verifyToken,isAuthority,updateStatus)                   //       |------- same function
authorityRouter.get('/issue/getAssignment_table',verifyToken,isAuthority,fetchAssignmentTable) // valid------
export default authorityRouter;