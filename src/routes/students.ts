import { Router } from "express";
import { studentRecordById } from "../controllers/student";

const router = Router();

router.get( '/:id', studentRecordById );

export default router;