import TodoService from '../services/todo';
import { Request, Response } from 'express';
import { ITodo } from '../types/todo';
export default class TodoController {
  private todoService: TodoService;
  constructor() {
    this.todoService = new TodoService();
    this.addTodo = this.addTodo.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  async addTodo(req: Request, res: Response): Promise<void> {
    try {
      const todo: ITodo = req.body;
      const newTodo: ITodo = await this.todoService.addTodo(todo);
      res.status(200).json({ data: newTodo, message: 'todo added' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getTodo(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const todo: ITodo | null = await this.todoService.getTodo(id);
      res.status(200).json({ data: todo, message: 'todo retrieved' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getTodos(req: Request, res: Response): Promise<void> {
    try {
      const todos: ITodo[] = await this.todoService.getTodos();
      res.status(200).json({ data: todos, message: 'all todos retrieved' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateTodo(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const todo: ITodo = req.body;
      const updateTodo: ITodo | null = await this.todoService.updateTodo(id, todo);
      res.status(200).json({
        data: updateTodo,
        message: updateTodo ? 'todo updated' : 'todo not found',
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteTodo(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req.params.id;
      const deleteTodo: ITodo | null = await this.todoService.deleteTodo(id);
      res.status(200).json({
        data: deleteTodo,
        message: deleteTodo ? 'todo deleted' : 'todo not found',
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
