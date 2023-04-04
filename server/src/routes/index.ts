import { Router } from 'express';
import { getTasks, addTask, updateTask, deleteTask } from '../controllers/tasks';

const router: Router = Router();

router.get("/tasks", getTasks);
router.get("/add-task", addTask);
router.get("/update-task/:id", updateTask);
router.get("/delete-task/:id", deleteTask);

export default router;