import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';
import EditTask from '../EditTask';

type Props = TaskProps & {
  updateTask: (task: ITask) => void;
  deleteTask: (_id: string) => void;
  editTask: (task: ITask) => void;
};

const TaskCard = styled.div<{ status: boolean }>`
  background-color: ${props => (props.status ? 'lightgreen' : 'white')};
`;

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TaskItem: React.FC<Props> = ({ task, updateTask, deleteTask, editTask }) => {
  const [isDone, setIsDone] = useState<boolean>(task.status);
  const [open, setOpen] = React.useState(false);
  const checkTask: string = task.status ? 'done' : '';
  
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setIsDone(task.status);
  }, [task.status]);

  const handleEditTask = (task: ITask) => {
    setOpen(true);
    editTask(task);
    
  }

  return (
    <>
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
                  sx={{ marginRight: '20px', marginTop: '20px' }}
                >
                  Done
                </Button>
              )}
              <Button onClick={() => handleEditTask(task)} variant="outlined" sx={{ marginLeft: '20px', marginTop: '20px' }}>
                Edit
              </Button>
              <Button onClick={() => deleteTask(task._id)} variant="outlined" sx={{ marginLeft: '20px', marginTop: '20px' }}>
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      </TaskCard>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <EditTask task={task} editTask={editTask}/>
      </Box>
      </Modal>
    </>
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
