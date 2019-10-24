import React from "react";
import PropTypes from "prop-types";
import { Grid, Paper } from "@material-ui/core";
const Step4 = props => {
  return (
    <div style={{ height: "300" }}>
      <Grid container item sm={12}>
        <Grid item sm={3} />
        <Grid item sm={2}>
          Meal
        </Grid>

        <Grid item sm={7}>
          {props.selectedData.mealType}
        </Grid>
      </Grid>

      <Grid container item sm={12} style={{ marginTop: "5%" }}>
        <Grid item sm={3} />
        <Grid item sm={2}>
          No of people
        </Grid>

        <Grid item sm={7}>
          {props.selectedData.people}
        </Grid>
      </Grid>
      <Grid container item sm={12} style={{ marginTop: "5%" }}>
        <Grid item sm={3} />
        <Grid item sm={2}>
          Restaurant
        </Grid>

        <Grid item sm={7}>
          {props.selectedData.restaurant}
        </Grid>
      </Grid>
      <Grid container item sm={12} style={{ marginTop: "5%" }}>
        <Grid item sm={3} />
        <Grid item sm={2}>
          Dishes
        </Grid>
        <Grid item sm={2} />
        <Grid item sm={5}>
          <Paper style={{ width: "70%", padding: "5%" }}>
            {props.selectedData.dishSelection.map(dish => {
              return (
                <div key={dish.name}>
                  {dish.name} -- {dish.servings}
                </div>
              );
            })}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

Step4.propTypes = {
  selectedData: PropTypes.object.isRequired
};

export default Step4;
