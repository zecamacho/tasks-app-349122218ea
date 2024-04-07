import { useGetUsersQuery } from "@/store/slices/users.api";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { Surface } from "../tasks/components/surface";
import { Col, Row } from "@/components/layout";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useNavigate } from "react-router-dom";

const Filters = () => {
  return <div>Filters</div>;
};

export const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <Col gap={2}>
      <Divider />
      <Typography variant="h5">Users</Typography>
      <Filters />
      <Grid container spacing={4}>
        {data?.users.map((user) => (
          <Grid item xs={12} lg={4}>
            <Surface
              onClick={() => navigate(`/users/${user.id}`)}
              sx={{
                p: 0,
                border: "1px solid",
                borderRadius: (theme) => theme.shape.borderRadius,
                borderColor: (theme) => theme.palette.input,
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                aspectRatio: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.2s ease-in-out",

                "&:hover": {
                  transform: "scale(1.02)",
                  borderColor: (theme) => theme.palette.grey[400],
                  boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
                  cursor: "pointer",
                },
              }}
            >
              <Col
                sx={{
                  flex: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 3,
                }}
              >
                <Box
                  sx={{
                    width: 125,
                    height: 125,
                    border: "2px solid",
                    borderColor: (theme) => theme.palette.input,
                    borderRadius: "50%",
                    outlineOffset: 4,
                    outline: "4px solid",
                    outlineColor: (theme) => theme.palette.input,
                  }}
                  component={"img"}
                  src={user.image}
                  alt={user.username}
                />

                <Col sx={{ alignItems: "center", gap: 1 }}>
                  <Typography variant="h6" fontWeight={"bold"}>
                    {user.firstName} {user.lastName}
                  </Typography>
                  <Col sx={{ alignItems: "center" }}>
                    <Row gap={1}>
                      <EmailOutlinedIcon sx={{ opacity: 0.5 }} />
                      <Typography color="grey">{user.email}</Typography>
                    </Row>
                    <Row gap={1}>
                      <CallOutlinedIcon sx={{ opacity: 0.5 }} />
                      <Typography color="grey">{user.phone}</Typography>
                    </Row>
                  </Col>
                </Col>
              </Col>

              <Col
                sx={{
                  borderTop: "1px solid",
                  borderTopColor: (theme) => theme.palette.input,
                  background: (theme) => theme.palette.grey[100],
                  borderBottomRightRadius: (theme) => theme.shape.borderRadius,
                  borderBottomLeftRadius: (theme) => theme.shape.borderRadius,
                  width: "100%",
                  p: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    color: (theme) => theme.palette.primary.main,
                    opacity: 0.8,
                    letterSpacing: 2,
                  }}
                >
                  {user.company.department}
                </Typography>
              </Col>
            </Surface>
          </Grid>
        ))}
      </Grid>
    </Col>
  );
};
