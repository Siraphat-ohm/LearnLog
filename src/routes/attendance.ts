import { Router } from "express";
import { classAttendance } from "../controllers/attendance";

const router = Router();

router.post( '/',  classAttendance );

export default router;