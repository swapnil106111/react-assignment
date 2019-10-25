import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Restaurants from "./components/Restaurants";
import Step1 from "./components/Step1";
import { shallow } from "enzyme";
import { checkAvailableDish } from "./components/Step3";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Step3 component", () => {
  it("check available dishes", () => {
    const boolean = checkAvailableDish({
      ChickenBurger: true,
      HamBurger: true,
      CheeseBurger: true,
      Fries: true
    });
    expect(!boolean).toBe(true);
  });
  it("check when dishes are not available", () => {
    const boolean = checkAvailableDish({
      ChickenBurger: false,
      HamBurger: false,
      CheeseBurger: false,
      Fries: false
    });
    expect(!boolean).toBe(false);
  });
});

describe("Restaurants component", () => {
  it("click on prev button initially", () => {
    const wrapper = shallow(<Restaurants />);
    const disabledElements = wrapper.find({ disabled: true });
    expect(disabledElements.length).toBe(1);
  });
});

describe("Restaurants component", () => {
  it("click on next button without setting mealtype and no of people", () => {
    const wrapper = shallow(<Restaurants />);

    let errorState = wrapper.state().selectedData.errors.meal;
    expect(errorState).toBe(undefined);
    errorState = wrapper.state().selectedData.errors.people;
    expect(errorState).toBe(undefined);
    const nextBtn = wrapper.find(".next");
    nextBtn.simulate("click");
    errorState = wrapper.state().selectedData.errors.meal;
    expect(errorState).toBe("Please select a meal");
    errorState = wrapper.state().selectedData.errors.people;
    expect(errorState).toBe("Please enter number of people between 1 to 10");
  });
});
