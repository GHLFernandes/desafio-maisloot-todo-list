import { Router } from 'express';
import { getTasks, addTask, updateTask, deleteTask, editTask } from '../controllers/tasks';

const router: Router = Router();

router.get('/tasks', getTasks);
router.post('/add-task', addTask);
router.put('/update-task/:id', updateTask);
router.put('/edit-task/:id', editTask);
router.delete('/delete-task/:id', deleteTask);

export default router;