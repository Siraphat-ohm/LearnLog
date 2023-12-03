import { Router } from "express";
import attendance from "./attendance";
import student from "./students";

const router = Router();

router.use('/attendance', attendance);
router.use('/student', student);

export default router;