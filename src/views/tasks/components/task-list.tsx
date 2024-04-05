import { Col, Row } from "@/components/layout";
import { useDispatch, useSelector } from "@/store/hooks";
import { Task, toggleComplete } from "@/store/slices/tasks";
import { Button, Divider, Typography } from "@mui/material";
import { DeleteTask } from "./delete-task";
import { EditTask } from "./edit-task";
import { Surface } from "./surface";

const renderTasks = (tasks: Array<Task>) => {
  const dispatch = useDispatch();

  if (tasks.length === 0) return <div>No tasks</div>;

  return tasks.map((task) => (
    <Col
      key={task.name}
      sx={{
        border: "1px solid",
        borderColor: (theme) => theme.palette.grey["300"],
        py: 2,
        px: 3,
        gap: 2,
        opacity: task.completed ? 0.5: 1
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
          <Button
            color={task.completed ? "error" : "success"}
            size="small"
            variant="outlined"
            sx={{ fontSize: 10 }}
            onClick={() => dispatch(toggleComplete(task))}
          >
            Mark as {task.completed ? "Incomplete" : "Completed"}
          </Button>

          <EditTask {...task} />
          <DeleteTask {...task} />
        </Row>
      </Row>

      <Divider />
      <Typography variant="body2" color="grey.500">
        {task.description}
      </Typography>
    </Col>
  ));
};

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <Surface>
      <Typography variant="h6">Task List</Typography>
      {renderTasks(tasks)}

      {/* <EditTask /> */}
    </Surface>
  );
};
