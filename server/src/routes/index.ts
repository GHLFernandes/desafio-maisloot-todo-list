import { Router } from 'express';
import { getTasks, addTask, updateTask, deleteTask } from '../controllers/tasks';

const router: Router = Router();

router.get('/tasks', getTasks);
router.post('/add-task', addTask);
router.put('/update-task/:id', updateTask);
router.delete('/delete-task/:id', deleteTask);

export default router;