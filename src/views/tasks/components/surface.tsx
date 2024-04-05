import { Col } from "@/components/layout";
import { StackProps } from "@mui/material";

export const Surface = (props: StackProps) => (
  <Col
    p={4}
    gap={2}
    sx={{
      flex: 1,
      borderRadius: 2,
      boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    }}
    {...props}
  />
);
