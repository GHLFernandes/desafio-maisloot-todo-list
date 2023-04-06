interface ITask{
    _id: string
    task: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

interface TaskProps {
    task: ITask
}

type ApiData = {
    message: string
    status: string
    tasks: ITask[]
    task: ITask
}