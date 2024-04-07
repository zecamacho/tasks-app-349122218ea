import { Col, Row } from "@/components/layout";
import { useDispatch, useSelector } from "@/store/hooks";
import { Task, toggleComplete } from "@/store/slices/tasks";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Divider, IconButton, Typography } from "@mui/material";
import { AddTask } from "./components/add-task";
import { DeleteTask } from "./components/delete-task";
import { EditTask } from "./components/edit-task";
import { Surface } from "./components/surface";

const CompleteButton = (task: Task) => {
  const dispatch = useDispatch();
  return (
    <IconButton
      sx={
        task.completed
          ? {
              backgroundColor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.primary.contrastText,
            }
          : {}
      }
      onClick={() => dispatch(toggleComplete(task))}
    >
      <CheckCircleOutlineIcon />
    </IconButton>
  );
};

const TaskItem = ({ task }: { task: Task }) => (
  <Col
    key={task.name}
    sx={{
      border: "1px solid",
      borderRadius: (theme) => theme.shape.borderRadius,
      borderColor: (theme) => theme.palette.input,
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      py: 2,
      px: 3,
      gap: 2,
      opacity: task.completed ? 0.5 : 1,
    }}
  >
    <Row
      justifyContent={"space-between"}
      flex="1"
      gap={2}
      alignItems={"center"}
    >
      <Typography
        variant="subtitle1"
        sx={{
          textDecoration: task.completed ? "line-through" : "unset",
        }}
      >
        {task.name}
      </Typography>
      <Row gap={1}>
        <CompleteButton {...task} />
        <EditTask {...task} />
        <DeleteTask {...task} />
      </Row>
    </Row>

    <Divider />
    <Typography variant="body2" color="grey.500">
      {task.description}
    </Typography>
  </Col>
);

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  const renderTasks = (tasks: Array<Task>) => {
    if (tasks.length === 0) return <div>No tasks</div>;

    return tasks.map((task) => <TaskItem task={task} key={task.id} />);
  };

  return (
    <Surface gap={3}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Task List
      </Typography>
      <Divider />
      <AddTask />
      {renderTasks([...tasks].reverse())}
    </Surface>
  );
};
