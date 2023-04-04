import { Document } from 'mongoose';

export interface ITask extends Document {
    task: string
    status: boolean
    description: string
}