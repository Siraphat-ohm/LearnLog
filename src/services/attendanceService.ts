import { Prisma } from "@prisma/client";
import prisma from "../configs/client";
import { generateId } from "../utils/generateId";
import { StudentRecord } from "../models/attendance";

export const createAttendance = async( 
    teacherId: string, 
    periodId: string, 
    records: StudentRecord[]
 ) => {
    const attendanceRecord = records.map( ( { studentId, reason } ) => {
        return {
            id: generateId(),
            studentId,
            reason
        }
    })

    return await prisma.attendance.create({
            data: {
                id : generateId(),
                teacherId,
                periodId,
                records: {
                    createMany: {
                        data: attendanceRecord
                    }
                }
            }
        });
}