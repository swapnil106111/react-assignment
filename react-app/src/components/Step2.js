import React from "react";
import PropTypes from "prop-types";
import { Select, MenuItem, InputLabel } from "@material-ui/core";

const Step2 = props => {
  return (
    <div style={{ height: 300, padding: "5%" }}>
      <div>
        <InputLabel>Please select a restaurant</InputLabel>
        <Select
          name="restaurant"
          value={props.selectedData.restaurant}
          onChange={event =>
            props.handleChange(event.target.name, event.target.value)
          }
          style={{ width: 250 }}
        >
          {props.restaurants.map(restaurant => {
            return (
              <MenuItem key={restaurant} value={restaurant}>
                {restaurant}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      {props.selectedData.errors.restaurant && (
        <div style={{ color: "red" }}>
          {props.selectedData.errors.restaurant}
        </div>
      )}
    </div>
  );
};

Step2.propTypes = {
  selectedData: PropTypes.object.isRequired,
  restaurants: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Step2;
