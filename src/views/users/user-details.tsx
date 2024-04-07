import { useGetUserQuery } from "@/store/slices/users.api";
import { useNavigate, useParams } from "react-router-dom";
import { Surface } from "../tasks/components/surface";
import { Col, Row } from "@/components/layout";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  StackProps,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HeaderSegment = ({ label, value }: { label: string; value: string }) => (
  <Col>
    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
      {label}
    </Typography>
    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
      {value}
    </Typography>
  </Col>
);

const Segment = ({
  label,
  value,
}: { label: string; value: string } & StackProps) => (
  <Col flex={1}>
    <Typography variant="body2">{label}</Typography>
    <Typography variant="h6">{value}</Typography>
  </Col>
);

export const UserDetails = () => {
  const { id } = useParams();
  const { data } = useGetUserQuery({ id });
  const navigate = useNavigate();

  if (!data) return null;

  return (
    <Col mt={4} gap={2}>
      <Row gap={2}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5">User Details</Typography>
      </Row>
      <Surface>
        <Row gap={4} alignItems={"center"}>
          <Box
            component={"img"}
            src={data?.image}
            sx={{
              p: 1,
              width: 100,
              height: 100,
              border: "1px solid",
              borderColor: (theme) => theme.palette.input,
              borderRadius: (theme) => theme.shape.borderRadius,
            }}
          />
          <HeaderSegment
            label="Name"
            value={`${data.firstName} ${data.lastName}`}
          />

          <HeaderSegment label="Age" value={String(data.age)} />
        </Row>
        <Divider />
        <Row gap={2} p={2}>
          <Grid container spacing={10}>
            <Grid item xs={12} lg={6}>
              <Col gap={2}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Personal Information
                </Typography>
                <Row gap={4} justifyContent={"space-between"}>
                  <Segment label="First Name" value={data.firstName} />
                  <Segment label="Last Name" value={data.lastName} />
                  <Segment label="Birth Date" value={data.birthDate} />
                </Row>
                <Row gap={4} justifyContent={"space-between"}>
                  <Segment label="Age" value={String(data.age)} />
                  <Segment label="Eye Color" value={data.eyeColor} />
                  <Segment label="Hair Color" value={data.hair.color} />
                </Row>
              </Col>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Col gap={2}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Contact
                </Typography>
                <Row justifyContent={"space-between"}>
                  <Segment label="Email" value={data.email} />
                  <Segment label="Phone" value={data.phone} />
                </Row>
                <Row>
                  <Segment label="Address" value={data.address.address} />
                </Row>
              </Col>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Col gap={2}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Bank Information
                </Typography>
                <Row justifyContent={"space-between"}>
                  <Segment label="Currency" value={data.bank.currency} />
                  <Segment label="Card Type" value={data.bank.cardType} />
                </Row>
                <Row justifyContent={"space-between"}>
                  <Segment label="Card Number" value={data.bank.cardNumber} />
                  <Segment label="Card Expires" value={data.bank.cardExpire} />
                </Row>
              </Col>
            </Grid>
          </Grid>
        </Row>
      </Surface>
    </Col>
  );
};
