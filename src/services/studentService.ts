import { Prisma, Student } from "@prisma/client";
import prisma from "../configs/client";

export const getStudentRecordById = ( id: string ) => {
    const student = prisma.student.findUniqueOrThrow( { 
        where: { id },
        include : {
            records: {
                include: {
                    attendance: {
                        include: {
                            period: {
                                include: {
                                    subject: true
                                }
                            }
                        }
                    }
                }
        }
    }});
    
    return student;
}

export const getStudentById = async<T extends Prisma.StudentInclude | null  >( id: string, include?: T ) => {
    const student = await prisma.student.findUniqueOrThrow({ 
        where: { id }, 
        include: include || undefined 
    });

    return student as Student & Prisma.StudentGetPayload<{ include: T }>;
}