import { model, Schema } from "mongoose";
import { ITodo } from '../types/todo';

const todoSchema: Schema = new Schema(
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

export default model<ITodo>("Todo", todoSchema)