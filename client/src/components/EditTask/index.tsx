import { Button, TextField } from '@mui/material';
import React, { useState, useRef } from 'react';

type Props = {
  editTask: (formData: ITask | any) => void;
  task: ITask
};

const EditTask: React.FC<Props> = ({ task, editTask }) => {
  const [data, setData] = useState<ITask | {}>({});
  const [dataTask, setDataTask] = useState<string>(task.task);
  const [dataDesc, setDataDesc] = useState<string>(task.description);
  const formRef = useRef<HTMLFormElement>(null);

  const handleDataForm: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setData({
      ...data,
      task: dataTask,
      description: dataDesc
    });
  };

  const isDataEmpty = Object.keys(data).length === 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTask(data);
    setData({ ...data, task: '', description: '' });
    formRef.current?.reset();
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onSubmit={handleSubmit}
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
          onChange={e => setDataTask(e.target.value)}
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
          onChange={e => setDataDesc(e.target.value)}
          value={dataDesc}
          id="description"
        />
      </div>
      <Button disabled={isDataEmpty} type="submit" variant="contained">
        Edit Task
      </Button>
    </form>
  );
};

export default EditTask;
