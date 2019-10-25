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

  it("click on next buttonby setting mealtype and without setting no of people", () => {
    const wrapper = shallow(<Restaurants />);

    let errorState = wrapper.state().selectedData.errors.meal;
    expect(errorState).toBe(undefined);
    errorState = wrapper.state().selectedData.errors.people;
    expect(errorState).toBe(undefined);
    const selectedData = {
      mealType: "Dinner",
      people: "",
      restaurant: "",
      dishSelection: [{ name: "", servings: 1, validServings: true }],
      errors: {}
    };
    wrapper.setState({ selectedData: selectedData });
    const nextBtn = wrapper.find(".next");
    nextBtn.simulate("click");
    errorState = wrapper.state().selectedData.errors.meal;
    expect(errorState).toBe(undefined);
    errorState = wrapper.state().selectedData.errors.people;
    expect(errorState).toBe("Please enter number of people between 1 to 10");
  });

  it("click on next buttonby without setting mealtype and by setting no of people", () => {
    const wrapper = shallow(<Restaurants />);

    let errorState = wrapper.state().selectedData.errors.meal;
    expect(errorState).toBe(undefined);
    errorState = wrapper.state().selectedData.errors.people;
    expect(errorState).toBe(undefined);
    const selectedData = {
      mealType: "",
      people: 5,
      restaurant: "",
      dishSelection: [{ name: "", servings: 1, validServings: true }],
      errors: {}
    };
    wrapper.setState({ selectedData: selectedData });
    const nextBtn = wrapper.find(".next");
    nextBtn.simulate("click");
    errorState = wrapper.state().selectedData.errors.meal;
    expect(errorState).toBe("Please select a meal");
    errorState = wrapper.state().selectedData.errors.people;
    expect(errorState).toBe(undefined);
  });

  it("if number no of people is between 1 to 10", () => {
    const wrapper = shallow(<Restaurants />);
    const selectedData = {
      mealType: "Dinner",
      people: 5,
      restaurant: "",
      dishSelection: [{ name: "", servings: 1, validServings: true }],
      errors: {}
    };
    wrapper.setState({ selectedData: selectedData });
    const nextBtn = wrapper.find(".next");
    nextBtn.simulate("click");
    let errorState = wrapper.state().selectedData.errors.meal;
    expect(errorState).toBe(undefined);
    errorState = wrapper.state().selectedData.errors.people;
    expect(errorState).toBe(undefined);
  });

  it("if number no of people are more than 10", () => {
    const wrapper = shallow(<Restaurants />);
    const selectedData = {
      mealType: "Dinner",
      people: 11,
      restaurant: "",
      dishSelection: [{ name: "", servings: 1, validServings: true }],
      errors: {}
    };
    wrapper.setState({ selectedData: selectedData });
    const nextBtn = wrapper.find(".next");
    nextBtn.simulate("click");
    let errorState = wrapper.state().selectedData.errors.meal;
    expect(errorState).toBe(undefined);
    errorState = wrapper.state().selectedData.errors.people;
    expect(errorState).toBe("Please enter number of people between 1 to 10");
  });

  it("if meal type is selected and valid no of people entered and then click on next button", () => {
    const wrapper = shallow(<Restaurants />);
    const selectedData = {
      mealType: "Dinner",
      people: 10,
      restaurant: "",
      dishSelection: [{ name: "", servings: 1, validServings: true }],
      errors: {}
    };
    wrapper.setState({ selectedData: selectedData });
    const nextBtn = wrapper.find(".next");
    nextBtn.simulate("click");
    let errorState = wrapper.state().selectedData.errors.meal;
    expect(errorState).toBe(undefined);
    errorState = wrapper.state().selectedData.errors.people;
    expect(errorState).toBe(undefined);
  });
});
