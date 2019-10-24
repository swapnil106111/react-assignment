import React, { Component } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Grid
} from "@material-ui/core";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        {
          id: 1,
          name: "Chicken Burger",
          restaurant: "Mc Donalds",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 2,
          name: "Ham Burger",
          restaurant: "Mc Donalds",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 3,
          name: "Cheese Burger",
          restaurant: "Mc Donalds",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 4,
          name: "Fries",
          restaurant: "Mc Donalds",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 5,
          name: "Egg Muffin",
          restaurant: "Mc Donalds",
          availableMeals: ["breakfast"]
        },
        {
          id: 6,
          name: "Burrito",
          restaurant: "Taco Bell",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 7,
          name: "Tacos",
          restaurant: "Taco Bell",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 8,
          name: "Quesadilla",
          restaurant: "Taco Bell",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 9,
          name: "Steak",
          restaurant: "BBQ Hut",
          availableMeals: ["dinner"]
        },
        {
          id: 10,
          name: "Yakitori",
          restaurant: "BBQ Hut",
          availableMeals: ["dinner"]
        },
        {
          id: 11,
          name: "Nankotsu",
          restaurant: "BBQ Hut",
          availableMeals: ["dinner"]
        },
        {
          id: 12,
          name: "Piman",
          restaurant: "BBQ Hut",
          availableMeals: ["dinner"]
        },
        {
          id: 13,
          name: "Vegan Bento",
          restaurant: "Vege Deli",
          availableMeals: ["lunch"]
        },
        {
          id: 14,
          name: "Coleslaw Sandwich",
          restaurant: "Vege Deli",
          availableMeals: ["breakfast"]
        },
        {
          id: 15,
          name: "Grilled Sandwich",
          restaurant: "Vege Deli",
          availableMeals: ["breakfast"]
        },
        {
          id: 16,
          name: "Veg. Salad",
          restaurant: "Vege Deli",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 17,
          name: "Fruit Salad",
          restaurant: "Vege Deli",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 18,
          name: "Corn Soup",
          restaurant: "Vege Deli",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 19,
          name: "Tomato Soup",
          restaurant: "Vege Deli",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 20,
          name: "Minestrone Soup",
          restaurant: "Vege Deli",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 21,
          name: "Pepperoni Pizza",
          restaurant: "Pizzeria",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 22,
          name: "Pepperoni Pizza",
          restaurant: "Pizzeria",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 23,
          name: "Hawaiian Pizza",
          restaurant: "Pizzeria",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 24,
          name: "Seafood Pizza",
          restaurant: "Pizzeria",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 25,
          name: "Deep Dish Pizza",
          restaurant: "Pizzeria",
          availableMeals: ["dinner"]
        },
        {
          id: 26,
          name: "Chow Mein",
          restaurant: "Panda Express",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 27,
          name: "Mapo Tofu",
          restaurant: "Panda Express",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 28,
          name: "Kung Pao",
          restaurant: "Panda Express",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 29,
          name: "Wontons",
          restaurant: "Panda Express",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 30,
          name: "Garlic Bread",
          restaurant: "Olive Garden",
          availableMeals: ["breakfast", "lunch", "dinner"]
        },
        {
          id: 31,
          name: "Ravioli",
          restaurant: "Olive Garden",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 32,
          name: "Rigatoni Spaghetti",
          restaurant: "Olive Garden",
          availableMeals: ["lunch", "dinner"]
        },
        {
          id: 33,
          name: "Fettucine Pasta",
          restaurant: "Olive Garden",
          availableMeals: ["lunch", "dinner"]
        }
      ],
      activeStep: 0,
      mealType: [],
      restaurant: [],
      availableDishes: {},
      selectedData: {
        mealType: "",
        people: "",
        restaurant: "",
        dishSelection: [{ name: "", servings: 1 }],
        errors: {}
      }
    };
  }

  componentDidMount() {
    let uniqueMealType = [];
    this.state.dishes.forEach(dish => {
      dish.availableMeals.forEach(mealType => {
        if (!uniqueMealType.includes(mealType)) {
          uniqueMealType.push(mealType);
        }
      });
    });
    this.setState({ mealType: uniqueMealType });
  }

  handleChange = (name, value, index = 0) => {
    if (name === "people") {
      const selectedData = this.state.selectedData;
      if (value === "NaN") {
        selectedData[name] = "";
      } else {
        selectedData[name] = value;
      }
      this.setState({ selectedData });
    } else if (name === "mealType") {
      const selectedData = this.state.selectedData;
      selectedData[name] = value;
      const restaurants = [];
      this.state.dishes.forEach(dish => {
        if (
          dish.availableMeals.includes(selectedData["mealType"]) &&
          !restaurants.includes(dish.restaurant)
        ) {
          restaurants.push(dish.restaurant);
        }
      });
      this.setState({ restaurant: restaurants, selectedData: selectedData });
    } else if (name === "restaurant") {
      const selectedData = this.state.selectedData;
      selectedData[name] = value;
      const availableDishes = {};
      this.state.dishes.forEach(dish => {
        if (
          dish.availableMeals.includes(selectedData["mealType"]) &&
          selectedData[name] === dish.restaurant
        ) {
          availableDishes[dish.name] = true;
        }
      });
      this.setState({
        availableDishes: availableDishes,
        selectedData: selectedData
      });
    } else if (name === "dish") {
      this.setState(prevState => {
        let selectedData = prevState.selectedData;
        const availableDishes = prevState.availableDishes;
        if (selectedData.dishSelection[index].name !== "") {
          availableDishes[selectedData.dishSelection[index].name] = true;
        }
        selectedData.dishSelection[index].name = value;
        availableDishes[value] = false;

        return { availableDishes: availableDishes, selectedData: selectedData };
      });
    } else if (name === "servings") {
      const selectedData = this.state.selectedData;
      selectedData.dishSelection[index].servings = parseInt(value);
      this.setState({
        selectedData
      });
    }
  };

  getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return (
          <Step1
            selectedData={this.state.selectedData}
            mealType={this.state.mealType}
            handleChange={this.handleChange}
          />
        );
      case 1:
        return (
          <Step2
            restaurants={this.state.restaurant}
            selectedData={this.state.selectedData}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <Step3
            availableDishes={this.state.availableDishes}
            selectedData={this.state.selectedData}
            handleChange={this.handleChange}
            addDish={this.addDish}
          />
        );
      case 3:
        return <Step4 selectedData={this.state.selectedData} />;
      default:
        return "Unknown stepIndex";
    }
  };
  addDish = () => {
    const selectedData = this.state.selectedData;
    selectedData.dishSelection.push({ name: "", servings: 1 });
    this.setState({
      selectedData
    });
  };
  handleBack = () => {
    this.setState(prevState => {
      return { activeStep: prevState.activeStep - 1 };
    });
  };

  handleNext = () => {
    this.setState(prevState => {
      const selectedData = prevState.selectedData;
      let flag = true;
      selectedData.errors = {};
      if (prevState.activeStep === 0) {
        if (selectedData.mealType === "") {
          selectedData.errors["meal"] = "Please select a meal";
          flag = false;
        }
        if (
          selectedData.people === "" ||
          !(
            parseInt(selectedData.people) > 0 &&
            parseInt(selectedData.people) < 11
          )
        ) {
          selectedData.errors["people"] =
            "Please enter number of people between 1 to 10";
          flag = false;
        }
      } else if (prevState.activeStep === 1) {
        if (selectedData.restaurant === "") {
          selectedData.errors["restaurant"] = "Please select a  restaurant";
          flag = false;
        }
      } else if (prevState.activeStep === 2) {
        let total = 0;
        selectedData.dishSelection.forEach((dish, index) => {
          total += dish.servings;
          if (dish.name === "") {
            flag = false;
            selectedData.errors["selectdish"] = "Please select a dish";
          }
        });
        if (total < selectedData.people) {
          selectedData.errors["total"] =
            "Total number of servings must be greater or equal to number of people";
          flag = false;
        }
      }

      return {
        activeStep: flag ? prevState.activeStep + 1 : prevState.activeStep,
        selectedData: selectedData
      };
    });
  };

  render() {
    const steps = ["Step1", "Step2", "Step3", "Review"];
    this.state.activeStep === steps.length &&
      console.log("Final Data: ", this.state.selectedData);
    return (
      <Paper
        style={{
          marginLeft: "10%",
          marginTop: "2%",
          width: "70%"
        }}
      >
        <Stepper activeStep={this.state.activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div style={{ height: 300, padding: "5%" }}>
              Order placed successfully.
            </div>
          ) : (
            <div>
              {this.getStepContent(this.state.activeStep)}
              <Grid container item sm={12} style={{ padding: "5%" }}>
                <Grid item sm={2}>
                  <Button
                    disabled={this.state.activeStep === 0}
                    variant="contained"
                    color="primary"
                    onClick={this.handleBack}
                  >
                    prev
                  </Button>
                </Grid>
                <Grid item sm={8} />
                <Grid item sm={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                  >
                    {this.state.activeStep === steps.length - 1
                      ? "Submit"
                      : "next"}
                  </Button>
                </Grid>
              </Grid>
            </div>
          )}
        </div>
      </Paper>
    );
  }
}

Restaurants.propTypes = {};

export default Restaurants;
