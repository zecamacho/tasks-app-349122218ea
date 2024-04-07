import { useDispatch } from "@/store/hooks";
import { addTask } from "@/store/slices/tasks";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import { TaskForm } from "./task-form";
import { TaskFormSchema } from "./task-form.schema";

export const AddTask = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<TaskFormSchema>({
    defaultValues: {
      taskName: "",
      taskDescription: "",
    },
  });
  const dispatch = useDispatch();
  const onEditTask: SubmitHandler<TaskFormSchema> = (updatedTask) => {
    dispatch(
      addTask({
        completed: false,
        name: updatedTask.taskName,
        description: updatedTask.taskDescription,
      }),
    );
    setOpen(false);
  };

  return (
    <Fragment>
      <Button onClick={() => setOpen(true)} variant="contained">
        New Task
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="add-task-dialog"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, display: "flex", alignItems: "center" }}
          id="edit-task-dialog"
        >
          <Typography sx={{ flex: 1 }}>New Task</Typography>

          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              border: "unset",
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{ py: 4, display: "flex", flexDirection: "column", gap: 4 }}
        >
          <Typography variant="subtitle1">
            Let's start by adding a task 👇
          </Typography>
          <TaskForm {...form} onSubmit={onEditTask} hideSubmit />
        </DialogContent>
        <DialogActions autoFocus sx={{ py: 2, px: 4 }}>
          <Button
            type="submit"
            variant="contained"
            autoFocus
            onClick={form.handleSubmit(onEditTask)}
            sx={{ minWidth: "50%" }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
