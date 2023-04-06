import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

type Props = TaskProps & {
  updateTask: (task: ITask) => void;
  deleteTask: (_id: string) => void;
};

const TaskCard = styled.div<{ status: boolean }>`
  background-color: ${props => (props.status ? 'lightgreen' : 'white')};
`;

const TaskItem: React.FC<Props> = ({ task, updateTask, deleteTask }) => {
  const [isDone, setIsDone] = useState<boolean>(task.status);

  const checkTask: string = task.status ? 'done' : '';
  
  useEffect(() => {
    setIsDone(task.status);
  }, [task.status]);

  const handleUpdateTask = (updatedTask: ITask): void => {
    updateTask(updatedTask);
    setIsDone(true);
  };

  return (
    <TaskCard status={task.status}>
      <Card variant="outlined" sx={{ maxWidth: 500, my: 2 }}>
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
            {task.status ? (
              <></>
            ) : (
              <Button
                onClick={() => updateTask(task)}
                variant="contained"
                className="done-btn"
              >
                Done
              </Button>
            )}
            <Button onClick={() => deleteTask(task._id)} variant="outlined">
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </TaskCard>
  );
};

const StyledTaskItem = styled(TaskItem)`
  .done-task {
    background-color: #c9e9c2;
  }
  .done-text {
    text-decoration: line-through;
  }
  .done-btn {
    background-color: #4caf50;
    color: white;
    &:hover {
      background-color: #388e3c;
    }
  }
`;

export default StyledTaskItem;
