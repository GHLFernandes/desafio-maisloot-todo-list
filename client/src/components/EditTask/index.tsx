import { Button, TextField } from '@mui/material';
import React, { useState, useRef } from 'react';

type Props = {
    editTask: (formData: ITask | any) => void;
    task: ITask;
    onClose: () => void;
};

const EditTask: React.FC<Props> = ({ task, editTask, onClose }) => {
    const [dataTask, setDataTask] = useState<string>(task.task);
    const [dataDesc, setDataDesc] = useState<string>(task.description);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, task: ITask) => {
        e.preventDefault();
        const updatedData = { task: dataTask, description: dataDesc };
        editTask(task);
        setDataTask('');
        setDataDesc('');
        onClose(); // chamada da função onClose
        formRef.current?.reset();
    };

    return (
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            onSubmit={(e) => handleSubmit(e, {...task, task: dataTask, description: dataDesc})}
            ref={formRef}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '16px',
                }}
            >
                <TextField
                    label="Task"
                    variant="outlined"
                    onChange={(e) => setDataTask(e.target.value)}
                    value={dataTask}
                    id="task"
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '16px',
                }}
            >
                <TextField
                    label="Description"
                    variant="outlined"
                    onChange={(e) => setDataDesc(e.target.value)}
                    value={dataDesc}
                    id="description"
                    multiline
                    rows={3}
                />
            </div>
            <Button type="submit" variant="contained">
                Edit Task
            </Button>
        </form>
    );
};

export default EditTask;