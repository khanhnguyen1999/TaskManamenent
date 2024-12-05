import { Task } from '../types';
import apis from './apis';
import http from './http';

export const taskService = {
  fetchTasks: async (): Promise<Task[]> => {
    const response = await http.get(apis.tasks.fetchAll);
    return response.data;
  },

  addTask: async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response = await http.post(apis.tasks.add, task);
    return response.data;
  },

  updateTask: async (task: Task): Promise<Task> => {
    const response = await http.put(apis.tasks.update(task.id), task);
    return response.data;
  },

  deleteTask: async (id: number): Promise<void> => {
    await http.delete(apis.tasks.delete(id));
  },
};

