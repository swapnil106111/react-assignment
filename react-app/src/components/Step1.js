import React from "react";
import PropTypes from "prop-types";
import { Select, MenuItem, InputLabel, TextField } from "@material-ui/core";

const Step1 = props => {
  return (
    <div style={{ height: 300, padding: "5%" }}>
      <div>
        <InputLabel>Please select a meal type</InputLabel>
        <Select
          name="mealType"
          value={props.selectedData.mealType}
          onChange={event =>
            props.handleChange(event.target.name, event.target.value)
          }
          style={{ width: 200 }}
        >
          {props.mealType.map(mealType => {
            return (
              <MenuItem key={mealType} value={mealType}>
                {mealType}
              </MenuItem>
            );
          })}
        </Select>
        {props.selectedData.errors.meal && (
          <p style={{ color: "red" }}>{props.selectedData.errors.meal}</p>
        )}
      </div>

      <div style={{ marginTop: "10%" }}>
        <TextField
          type="number"
          name="people"
          label="Number of people"
          value={props.selectedData.people}
          onChange={event =>
            props.handleChange(event.target.name, event.target.value)
          }
          InputProps={{ inputProps: { min: 1, max: 10 } }}
          style={{ width: 200 }}
        />
        {props.selectedData.errors.people && (
          <p style={{ color: "red" }}>{props.selectedData.errors.people}</p>
        )}
      </div>
    </div>
  );
};

Step1.propTypes = {
  selectedData: PropTypes.object.isRequired,
  mealType: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Step1;
