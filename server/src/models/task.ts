import { model, Schema } from "mongoose";
import { ITask } from '../types/task';

const taskSchema: Schema = new Schema(
    {
        task: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export default model<ITask>("Todo", taskSchema)