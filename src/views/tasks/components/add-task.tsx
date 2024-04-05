import { useDispatch } from "@/store/hooks";
import { addTask } from "@/store/slices/tasks";
import { SubmitHandler, useForm } from "react-hook-form";
import { Surface } from "./surface";
import { TaskForm } from "./task-form";
import { TaskFormSchema } from "./task-form.schema";

export const AddTask = () => {
  const form = useForm<TaskFormSchema>({
    defaultValues: {
      taskName: "",
      taskDescription: "",
    },
  });

  const dispatch = useDispatch();

  const onTaskAction: SubmitHandler<TaskFormSchema> = (task) =>
    dispatch(
      addTask({
        name: task.taskName,
        description: task.taskDescription,
        completed: false,
      })
    );

  return (
    <Surface>
      <TaskForm {...form} onSubmit={onTaskAction} />
    </Surface>
  );
};
