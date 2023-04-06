import axios, { AxiosResponse } from 'axios';

const url: string = 'http://localhost:8080';

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

// export const addTask = async (formData: ITask): Promise<{ status: number, data: ApiData }> => {
//     try {
//         const task: Omit<ITask, '_id'> = {
//           task: formData.task,
//           description: formData.description,
//           status: false,
//         };
    
//         const saveTask: AxiosResponse<ApiData> = await axios.post(`${url}/add-task`, task);
    
//         return { status: saveTask.status, data: saveTask.data };
//       } catch(error: any) {
//         throw new Error(error);
//       }
// }

// export const addTask = async (task: ITask) => {
//     try {
//       const response = await axios.post('/add-task', task, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

export const updateTask = async (task: ITask): Promise<AxiosResponse<ApiData>> => {
    try{
        const taskToUpdate: Pick<ITask , 'status'> = {
            status: true,
        }

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