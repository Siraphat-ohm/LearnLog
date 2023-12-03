import { Prisma } from "@prisma/client";

export type StudentRecord = {
    studentId: string;
    reason: Prisma.Reason;
};

export interface AttendanceRequest {
    records: StudentRecord[];
    periodId: string;
    classroomId: string;
}