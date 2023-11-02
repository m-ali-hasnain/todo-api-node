import TodoDao from '../dao/todo';
import { ITodo } from '../types/todo';
export default class TodoService {
  private todoDao: TodoDao;
  constructor() {
    this.todoDao = new TodoDao();
  }
  async addTodo(todo: ITodo): Promise<ITodo> {
    return this.todoDao.addTodo(todo);
  }
  async getTodo(id: string): Promise<ITodo | null> {
    return this.todoDao.getTodo(id);
  }
  async getTodos(): Promise<ITodo[]> {
    return this.todoDao.getTodos();
  }
  async updateTodo(id: string, todo: ITodo): Promise<ITodo | null> {
    return this.todoDao.updateTodo(id, todo);
  }
  async deleteTodo(id: string): Promise<ITodo | null> {
    return this.todoDao.deleteTodo(id);
  }
}
