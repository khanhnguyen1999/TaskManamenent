import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { taskService } from '../services/taskService';
import { Task, TasksState } from '../types';


const initialState: TasksState = {
  tasks: [],
  status: 'idle',
  error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return await taskService.fetchTasks();
});

export const addTask = createAsyncThunk('tasks/addTask', async (task: Omit<Task, 'id'>) => {
  return await taskService.addTask(task);
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (task: Task) => {
  return await taskService.updateTask(task);
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: number) => {
  await taskService.deleteTask(id);
  return id;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;

