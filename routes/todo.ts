import express from 'express';
const router = express();
import TodoController from '../controllers/todo';

const todoController = new TodoController();
router.get('/', todoController.getTodos);
router.get('/:id', todoController.getTodo);
router.post('/', todoController.addTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;
