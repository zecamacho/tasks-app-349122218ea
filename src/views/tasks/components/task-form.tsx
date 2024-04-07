import { Input } from "@/components/inputs";
import { Col } from "@/components/layout";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Button, Typography } from "@mui/material";
import { Control, SubmitHandler, UseFormReturn } from "react-hook-form";
import { TaskFormSchema } from "./task-form.schema";

type TaskFormProps = {
  control: Control<TaskFormSchema>;
  onSubmit: SubmitHandler<TaskFormSchema>;
  handleSubmit: UseFormReturn<TaskFormSchema>["handleSubmit"];
  title?: string;
  submitLabel?: string;
  hideSubmit?: boolean;
};

export const TaskForm = ({
  control,
  handleSubmit,
  onSubmit,
  title = "",
  submitLabel = "Submit",
  hideSubmit = false,
}: TaskFormProps) => {
  return (
    <Col component="form" onSubmit={handleSubmit(onSubmit)}>
      {title && <Typography variant="h6">{title}</Typography>}
      <Col gap={4}>
        <Input
          label="Task name"
          name="taskName"
          control={control}
          inputProps={{ fullWidth: true }}
        />

        <Input
          label="Description"
          name="taskDescription"
          control={control}
          inputProps={{ multiline: true }}
        />
        {!hideSubmit && (
          <Button
            variant="contained"
            type="submit"
            sx={{ maxWidth: "50%" }}
            endIcon={<TrendingFlatIcon />}
          >
            {submitLabel}
          </Button>
        )}
      </Col>
    </Col>
  );
};
