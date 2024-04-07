import { Task, editTask } from "@/store/slices/tasks";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { TaskForm } from "./task-form";
import { TaskFormSchema } from "./task-form.schema";

export const EditTask = (task: Task) => {
  const [open, setOpen] = useState(false);
  const form = useForm<TaskFormSchema>({
    defaultValues: {
      taskName: task.name,
      taskDescription: task.description,
    },
  });
  const dispatch = useDispatch();
  const onEditTask: SubmitHandler<TaskFormSchema> = (updatedTask) => {
    dispatch(
      editTask({
        ...task,
        name: updatedTask.taskName,
        description: updatedTask.taskDescription,
      }),
    );
    setOpen(false);
  };

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="edit-task-dialog"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, display: "flex", alignItems: "center" }}
          id="edit-task-dialog"
        >
          <Typography sx={{ flex: 1 }}>Edit Task</Typography>
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
        <DialogContent dividers sx={{ py: 4 }}>
          <TaskForm {...form} onSubmit={onEditTask} hideSubmit />
        </DialogContent>
        <DialogActions autoFocus sx={{ py: 2, px: 4 }}>
          <Button
            type="submit"
            variant="contained"
            autoFocus
            onClick={form.handleSubmit(onEditTask)}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
