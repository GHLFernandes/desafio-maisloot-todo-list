import { Document } from 'mongoose';

export interface ITodo extends Document {
    task: string
    status: boolean
    description: string
}