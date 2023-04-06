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
    <form className='taskForm' onSubmit={(e) => saveTask(e, data)} >
        <div>
            <div>
                <label htmlFor='task'>Task</label>
                <input 
                    type='text'
                    onChange={handleDataForm}
                    id='task'
                />
            </div>
            <div>
                <label htmlFor='description'>Description</label>
                <input 
                    type='text'
                    onChange={handleDataForm}
                    id='description'
                />
            </div>
        </div>
    <button disabled={data === undefined ? true : false}>Add Task</button>
    </form>
  )
}

export default AddTask;