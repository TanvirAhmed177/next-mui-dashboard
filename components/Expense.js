import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import LocalAtmOutlinedIcon from "@material-ui/icons/LocalAtmOutlined";
import { red } from "@material-ui/core/colors";
import { styled } from "@material-ui/core/styles";

const DashboardIcon = styled(Avatar)({
  backgroundColor: "#FFF6E0",
  width: "41px",
  height: "81px",
  marginRight: "15px",
  borderRadius: "25px",
  color: "#FFC620",
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
              <LocalAtmOutlinedIcon />
            </DashboardIcon>
            <Grid>
              <Typography color="textSecondary" gutterBottom variant="h5">
                Expense
              </Typography>
              <Typography color="#FFC620" variant="h3">
                $1200
              </Typography>
            </Grid>
          </InsideGrid>
        </Grid>
      </DashboardGrid>
    </CardContent>
  </DashboardCard>
);

export default Budget;
