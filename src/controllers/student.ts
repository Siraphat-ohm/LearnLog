import { Request, Response, NextFunction } from 'express';
import * as services from '../services/studentService';

const studentRecordById = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const { id } = req.params;
        const student = await services.getStudentRecordById( id );
        res.json( student );

    } catch (e) {
        next(e);
    }
}

export { 
    studentRecordById
}