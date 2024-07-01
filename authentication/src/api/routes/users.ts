import { Router } from "express";
import { fetchAllUsers } from '../controllers/auth'

const router = Router();

router.get('/all', fetchAllUsers);

export default router