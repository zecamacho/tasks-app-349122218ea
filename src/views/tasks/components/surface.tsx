import { Col } from "@/components/layout";
import { StackProps } from "@mui/material";

export const Surface = ({ sx, ...props }: StackProps) => (
  <Col
    p={4}
    gap={2}
    sx={{
      minHeight: 0,
      borderRadius: (theme) => theme.shape.borderRadius,
      boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      ...sx,
    }}
    {...props}
  />
);
