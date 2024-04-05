import {
  FormControl,
  InputBase,
  InputBaseProps,
  InputLabel,
  InputLabelProps as MuiLabelProps,
} from "@mui/material";
import {
  Control,
  FieldValues,
  Path,
  UseControllerProps,
  useController,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  inputProps?: InputBaseProps;
  labelProps?: MuiLabelProps;
  label?: string;
  name: Path<T>;
  control: Control<T>;
};

export const Input = <T extends FieldValues>({
  name,
  control,
  inputProps,
  labelProps,
  label,
}: InputProps<T>) => {

  const { field, fieldState } = useController({ name, control });
  
  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor="task-field" {...labelProps}>
        {label}
      </InputLabel>
      <InputBase
        id="task-field"
        aria-describedby="Task name field"
        {...inputProps}
        {...field}
      />
    </FormControl>
  );
};
