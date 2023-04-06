import React, { useEffect, useState } from 'react';
import TaskItem from './components/TaskItem';
import AddTask from './components/AddTask';
import { getTasks, addTask, updateTask, deleteTask } from './api';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = (): void => {
    getTasks()
      .then(({ data: { tasks } }: ITask[] | any ) => setTasks(tasks))
      .catch((error: Error) => console.log(error));
  };

  const handleSaveTask = (e: React.FormEvent, dataForm: ITask): void => {
    e.preventDefault();

    addTask(dataForm)
      .then((response) => {
        if(response.status !== 201){
          throw new Error('Error! Task not saved!');
        }
        setTasks(response.data.tasks);
      })
      .catch(error => console.log(error));
  };

  const handleUpdateTask = (task: ITask): void => {
    updateTask(task)
      .then(({status, data}) => {
        if(status !== 200){
          throw new Error('Error! Task not updated!');
        }
      setTasks(data.tasks);
      })
      .catch(error => console.log(error));
  };

  const handleDeleteTask = (_id: string): void => {
    deleteTask(_id)
      .then(({status, data}) => {
        if(status !== 200){
          throw new Error('Error! Task not deleted!');
        }

        setTasks(data.tasks);
      })
      .catch(error => console.log(error));
  };

  return(
    <main className='App'>
      <h1>My Tasks</h1>
      <AddTask saveTask={handleSaveTask} />
      {
        tasks.map((task: ITask) => (
          <TaskItem
            key={task._id}
            updateTask={handleUpdateTask}
            deleteTask={handleDeleteTask}
            task={task}
          />
        ))
      }
    </main>
  )
}

export default App;