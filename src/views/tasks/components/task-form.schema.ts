import { z } from "zod";

export const addTaskSchema = z.object({
  taskName: z.string(),
  taskDescription: z.string(),
});

export type TaskFormSchema = z.infer<typeof addTaskSchema>;
