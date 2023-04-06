import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

type Props = TaskProps & {
  updateTask: (task: ITask) => void;
  deleteTask: (_id: string) => void;
};

const TaskItem: React.FC<Props> = ({ task, updateTask, deleteTask }) => {
  const checkTask: string = task.status ? 'done' : '';

  return (
    <Card variant="outlined" sx={{ maxWidth: 500, mb: 2 }}>
      <CardContent>
        <div className="txt">
          <Typography variant="h5" component="h2" className={checkTask}>
            {task.task}
          </Typography>
          <Typography variant="body2" component="p" className={checkTask}>
            {task.description}
          </Typography>
        </div>
        <div className="btn">
          <Button
            onClick={() => updateTask(task)}
            variant="contained"
            className={task.status ? 'hide-btn' : 'done-btn'}
          >
            Done
          </Button>
          <Button onClick={() => deleteTask(task._id)} variant="outlined">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
