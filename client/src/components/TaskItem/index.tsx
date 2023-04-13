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
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsDone(task.status);
  }, [task.status]);

  const handleDoneClick = () => {
    updateTask({ ...task, status: true });
  };

  const handleEditClick = () => {
    setOpen(true);
  };

  const handleDeleteClick = () => {
    deleteTask(task._id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
       <TaskCard status={task.status}>
        <Card variant="outlined" sx={{ maxWidth: 500, my: 2 }}>
          <CardContent>
            <div className="txt">
              <Typography variant="h5" component="h2" className={task.status ? 'done-text' : ''}>
                {task.task}
              </Typography>
              <Typography variant="body2" component="p" className={task.status ? 'done-text' : ''}>
                {task.description}
              </Typography>
            </div>
            <div className="btn">
              {task.status ? (
                <></>
              ) : (
                <>
                  <Button onClick={handleEditClick} variant="outlined" sx={{ marginLeft: '20px', marginTop: '20px' }}>
                    Edit
                  </Button>
                  <Button
                    onClick={handleDoneClick}
                    variant="contained"
                    className="done-btn"
                    sx={{ marginRight: '20px', marginTop: '20px' }}
                  >
                    Done
                  </Button>
                </>
              )}
              <Button onClick={handleDeleteClick} variant="outlined" sx={{ marginLeft: '20px', marginTop: '20px' }}>
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
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center'}}>
            Edit Task
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <EditTask task={task} editTask={editTask} onClose={handleClose} />
          </Typography>
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
