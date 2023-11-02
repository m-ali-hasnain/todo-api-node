import { ITodo } from '../types/todo';
import Todo from '../models/todo';
export default class TodoDao {
  async addTodo(todo: ITodo): Promise<ITodo> {
    const newTodo = new Todo(todo);
    return await newTodo.save();
  }
  async getTodo(id: string): Promise<ITodo | null> {
    return await Todo.findOne({ _id: id });
  }
  async getTodos(): Promise<ITodo[]> {
    return await Todo.find({});
  }
  async updateTodo(id: string, todo: ITodo): Promise<ITodo | null> {
    return await Todo.findByIdAndUpdate(id, todo, { new: true });
  }
  async deleteTodo(id: string): Promise<ITodo | null> {
    return await Todo.findByIdAndDelete(id);
  }
}
