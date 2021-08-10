import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import { styled } from "@material-ui/core/styles";

const DashboardIcon = styled(Avatar)({
  backgroundColor: "#C5DBFF",
  width: "41px",
  height: "81px",
  marginRight: "15px",
  borderRadius: "25px",
  color: "#3981F7",
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
              <MonetizationOnOutlinedIcon />
            </DashboardIcon>
            <Grid>
              <Typography color="textSecondary" gutterBottom variant="h5">
                Sales
              </Typography>
              <Typography color="#3981F7" variant="h3">
                $4,021
              </Typography>
            </Grid>
          </InsideGrid>
        </Grid>
      </DashboardGrid>
    </CardContent>
  </DashboardCard>
);

export default Budget;
