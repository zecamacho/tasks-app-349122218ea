import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { mock } from "./tasks.mock";

export type Task = {
  id: string;
  name: string;
  description: string;
  completed: boolean;
};

export type TaskState = Task[];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [...mock] as TaskState,
  reducers: {
    addTask: (state, { payload: task }: PayloadAction<Omit<Task, "id">>) => {
      state.push({ ...task, id: uuidv4() });
    },
    editTask: (state, { payload: task }: PayloadAction<Task>) => {
      return state.map((t) => (t.id === task.id ? { ...t, ...task } : t));
    },
    deleteTask: (state, { payload: task }: PayloadAction<Task>) => {
      return state.filter((t) => t.id !== task.id);
    },
    toggleComplete: (state, { payload: task }: PayloadAction<Task>) => {
      return state.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t,
      );
    },
  },
});

export const { addTask, editTask, deleteTask, toggleComplete } =
  tasksSlice.actions;

export default tasksSlice.reducer;
