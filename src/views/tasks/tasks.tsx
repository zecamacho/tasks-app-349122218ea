import { Row } from "@/components/layout";
import { AddTask } from "./components/add-task";
import { TaskList } from "./components/task-list";

export const Tasks = () => {
  return (
    <Row justifyContent={"space-between"} gap={4}>
      <AddTask />
      <TaskList />
    </Row>
  );
};
