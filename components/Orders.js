import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import TimelapseOutlinedIcon from "@material-ui/icons/TimelapseOutlined";
import { styled } from "@material-ui/core/styles";
const DashboardIcon = styled(Avatar)({
  backgroundColor: "#BCDDB3",
  width: "41px",
  height: "81px",
  marginRight: "15px",
  borderRadius: "25px",
  color: "#5DAE49",
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

const Budget = () => (
  <DashboardCard>
    <CardContent>
      <DashboardGrid container spacing={3}>
        <Grid item>
          <InsideGrid item>
            <DashboardIcon>
              <TimelapseOutlinedIcon />
            </DashboardIcon>
            <Grid>
              <Typography color="textSecondary" gutterBottom variant="h5">
                Orders
              </Typography>
              <Typography color="#5DAE49" variant="h3">
                80
              </Typography>
            </Grid>
          </InsideGrid>
        </Grid>
      </DashboardGrid>
    </CardContent>
  </DashboardCard>
);

export default Budget;
