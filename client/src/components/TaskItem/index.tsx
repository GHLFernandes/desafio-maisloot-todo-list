import React from 'react';

type Props = TaskProps & {
    updateTask: (task: ITask) => void
    deleteTask: (_id: string) => void
}

const TaskItem: React.FC<Props> = ({ task, updateTask, deleteTask}) => {
    const checkTask: string = task.status ? 'done' : '';

  return (
    <div className='task-card'>
        <div className='txt'>
            <h1 className={checkTask}>{task.task}</h1>
            <span className={checkTask}>{task.description}</span>
        </div>
        <div className="btn">
            <button 
                onClick={() => updateTask(task)}
                className={task.status ? 'hide-btn' : 'done-btn'}
            >
                Done
            </button>
            <button
                onClick={() => deleteTask(task._id)}
                className='delete-btn'
            >
                Delete
            </button>
        </div>
    </div>
  )
}

export default TaskItem;