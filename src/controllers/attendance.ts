import { NextFunction, Request, Response } from 'express';
import * as attendanceService from '../services/attendanceService';
import * as studentService from '../services/studentService';
import * as periodService from '../services/periodServices';
import { APIError } from '../configs/ApiError';
import { AttendanceRequest } from '../models/attendance';

const classAttendance = async (req: Request<{}, {}, AttendanceRequest>, res: Response, next: NextFunction) => {
    try {
        const { classroomId, records, periodId } = req.body;

        for ( const record of records ) {
            const student = await studentService.getStudentById( record.studentId );

            if ( student.classroomId !== classroomId ) {
                throw new APIError('Student is not in this classroom', 400);
            }

            const period = await periodService.getPeriodById( periodId, { classroom: true } );

            if ( period.classroom.filter( ( { id } ) => id === classroomId ).length === 0 )  {
                throw new APIError('Period is not in this classroom', 400);
            }
        }

        const attendance = await attendanceService.createAttendance( "1", periodId, records );

        res.status( 201 ).json(attendance);

    } catch (err) {
        next(err);
    }
};

export { classAttendance };