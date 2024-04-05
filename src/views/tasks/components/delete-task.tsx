import { Task, deleteTask } from "@/store/slices/tasks";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
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
import { useDispatch } from "react-redux";

export const DeleteTask = (task: Task) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const onDeleteTask = () => {
    dispatch(deleteTask(task));
    setOpen(false);
  };

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <DeleteIcon />
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
          <Typography sx={{ flex: 1 }}>
            Are you sure you want to Delete?
          </Typography>
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
        <DialogContent dividers>
          <Typography>
            This action cannot be undone. Deleting this record will remove it
            permanently from the list.
          </Typography>
        </DialogContent>
        <DialogActions autoFocus sx={{ py: 2, px: 4 }}>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => onDeleteTask()}
          >
            Delete Task
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
