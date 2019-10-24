import React from "react";
import PropTypes from "prop-types";
import {
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Grid,
  Button
} from "@material-ui/core";
const checkAvailableDish = availableDishes => {
  const values = Object.values(availableDishes);
  return values.every(function(dish) {
    return dish === false;
  });
};
const Step3 = props => {
  let counter = 0;

  return (
    <>
      {props.selectedData.errors.total && (
        <Grid container item sm={12}>
          <Grid item sm={2} />
          <div style={{ color: "red" }}>{props.selectedData.errors.total}</div>
        </Grid>
      )}
      <div style={{ height: "700", padding: "4%" }}>
        {props.selectedData.dishSelection.map((dish, index) => {
          counter += 1;
          return (
            <div key={index} style={{ marginTop: "4%" }}>
              <Grid container item sm={12}>
                <Grid item sm={5}>
                  <InputLabel>Please select a dish</InputLabel>
                  <Select
                    name="dish"
                    value={dish.name}
                    onChange={event =>
                      props.handleChange(
                        event.target.name,
                        event.target.value,
                        index
                      )
                    }
                    style={{ width: 200 }}
                  >
                    {Object.keys(props.availableDishes).map(available => {
                      return (
                        (props.availableDishes[available] ||
                          dish.name === available) && (
                          <MenuItem key={available} value={available}>
                            {available}
                          </MenuItem>
                        )
                      );
                    })}
                  </Select>
                </Grid>
                <Grid item sm={3} />
                <Grid item sm={3}>
                  <InputLabel>Number of servings</InputLabel>
                  <TextField
                    type="number"
                    name="servings"
                    value={dish.servings}
                    onChange={event =>
                      props.handleChange(
                        event.target.name,
                        event.target.value,
                        index
                      )
                    }
                    InputProps={{ inputProps: { min: 1, max: 10 } }}
                    style={{ width: 200 }}
                  />
                </Grid>
              </Grid>
            </div>
          );
        })}
        {props.selectedData.errors.selectdish && (
          <Grid container item sm={12}>
            <Grid item sm={5}>
              <div style={{ color: "red" }}>
                {props.selectedData.errors.selectdish}
              </div>
            </Grid>
          </Grid>
        )}
        {!checkAvailableDish(props.availableDishes) &&
        props.selectedData.dishSelection[counter - 1]["name"] !== "" ? (
          <Button
            style={{ marginTop: "2%" }}
            type="button"
            variant="contained"
            color="primary"
            onClick={props.addDish}
          >
            Add Dish
          </Button>
        ) : (
          <Button
            style={{ marginTop: "3%" }}
            type="button"
            disabled
            variant="contained"
            color="primary"
            onClick={props.addDish}
          >
            Add Dish
          </Button>
        )}
      </div>
    </>
  );
};
Step3.propTypes = {
  availableDishes: PropTypes.object.isRequired,
  selectedData: PropTypes.object.isRequired,
  addDish: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default Step3;
