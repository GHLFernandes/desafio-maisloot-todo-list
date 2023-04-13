import axios, { AxiosResponse } from 'axios';

const url: string = 'https://desafio-maisloot-todo-list-server.vercel.app';

export const getTasks = async (): Promise<AxiosResponse<ApiData>> =>{
    try{
        const tasks: AxiosResponse<ApiData> = await axios.get(`${url}/tasks`);

        return tasks;
    }catch(error: any){
        throw new Error(error);
    }
}

export const addTask = async (formData: ITask): Promise<AxiosResponse<ApiData>> => {
    try{
        const task: Omit<ITask, '_id'> = {
            task: formData.task,
            description: formData.description,
            status: false,
        };

        const saveTask: AxiosResponse<ApiData> = await axios.post(`${url}/add-task`, task);

        return saveTask;
    }catch(error: any){
        throw new Error(error);
    }
}

export const updateTask = async (task: ITask): Promise<AxiosResponse<ApiData>> => {
    try{
        const taskToUpdate: Pick<ITask , 'status'> = {
            status: true,
        }

        const updateTask: AxiosResponse<ApiData> = await axios.put(`${url}/update-task/${task._id}`, taskToUpdate);

        return updateTask;
    }catch(error: any){
        throw new Error(error);
    }
}

export const editTask = async (task: ITask): Promise<AxiosResponse<ApiData>> => {
    try{
        const taskToUpdate: Omit<ITask, '_id'> = {
            task: task.task,
            description: task.description,
            status: task.status,
        };

        const updateTask: AxiosResponse<ApiData> = await axios.put(`${url}/edit-task/${task._id}`, taskToUpdate);

        return updateTask;
    }catch(error: any){
        throw new Error(error);
    }
}

export const deleteTask = async (_id: string): Promise<AxiosResponse<ApiData>> => {
    try{
        const deleteTask: AxiosResponse<ApiData> = await axios.delete(`${url}/delete-task/${_id}`);

        return deleteTask;
    }catch(error: any){
        throw new Error(error);
    }
}