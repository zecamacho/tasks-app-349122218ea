import { Link } from "@/components/link";
import { Row } from "@/components/layout";

export const Navbar = () => {
  return (
    <Row py={1} direction={"row"} gap={2}>
      <Link to={"/tasks"}>Tasks</Link>
      <Link to={"/users"}>Users</Link>
    </Row>
  );
};
