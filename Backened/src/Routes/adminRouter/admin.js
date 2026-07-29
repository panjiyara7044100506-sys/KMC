import express from 'express';
import { verifyToken } from '../../middleware/auth.middleware.js';
import { isAdmin } from '../../middleware/adminMiddleware/admin.middleware.js';
import { delete_users_all_db, fetchALlIssues } from '../../controller/admin/admin.controller.js';

const adminRouter = express.Router();
adminRouter.get('/all-issues',verifyToken,isAdmin,fetchALlIssues);
adminRouter.delete('/all_users-delete',verifyToken,isAdmin,delete_users_all_db);

export default adminRouter;