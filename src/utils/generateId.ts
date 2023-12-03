import { v4 as uuidv4 } from 'uuid';

export const generateId = () => {
    const id = uuidv4();
    return id.slice(id.length - 5, id.length - 1);
}