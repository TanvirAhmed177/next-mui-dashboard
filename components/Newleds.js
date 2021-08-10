import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import { styled } from "@material-ui/core/styles";

const DashboardIcon = styled(Avatar)({
  backgroundColor: "#F2F1FE",
  width: "41px",
  height: "81px",
  marginRight: "15px",
  borderRadius: "25px",
  color: "#663399",
});
const DashboardGrid = styled(Grid)({
  justifyContent: "space-between",
  margin: "auto",
});
const DashboardCard = styled(Card)({
  height: "150px",
  backgroundColor: "white",
  borderRadius: "25px",
});

const InsideGrid = styled(Grid)({
  display: "flex",
});
const Newleds = () => (
  <DashboardCard>
    <CardContent>
      <DashboardGrid container spacing={3}>
        <Grid item>
          <InsideGrid item>
            <DashboardIcon>
              <PersonAddOutlinedIcon />
            </DashboardIcon>
            <Grid>
              <Typography color="textSecondary" gutterBottom variant="h5">
                New Leds
              </Typography>
              <Typography color="#663399" variant="h3">
                205
              </Typography>
            </Grid>
          </InsideGrid>
        </Grid>
      </DashboardGrid>
    </CardContent>
  </DashboardCard>
);

export default Newleds;
