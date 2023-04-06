import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

type Props = {
   saveTask: (e: React.FormEvent, formData: ITask | any) => void
}

const AddTask: React.FC<Props> = ({ saveTask }) => {
   const [data, setData] = useState<ITask | {}>();

   const handleDataForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setData({
        ...data,
        [e.currentTarget.id]: e.currentTarget.value,
    });
   }

  return (
    <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            
            autoComplete="off"
            onSubmit={(e) => saveTask(e, data)} 
            >
            <div>
                <TextField 
                    required
                    id="task" 
                    label="Task" 
                    variant="outlined" 
                    size="small"
                    onChange={(e: React.FormEvent) => handleDataForm}
                />
            </div>
            <div>
                <TextField 
                    required
                    id="description" 
                    label="Description" 
                    variant="outlined" 
                    size="small"
                    onChange={(e: React.FormEvent) => handleDataForm}
                />

            </div>
        </Box>
        <Button variant="outlined" >Add Task</Button>
</>
  )
}

export default AddTask;