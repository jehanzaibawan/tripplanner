import React from "react";
import renderer from "react-test-renderer";
import ToggleGroup from "./ToggleGroup";

it("renders a snapshot", () => {
  const props = {
    options: [
      { value: "cheapest", label: "Cheapest", icon: "low_priority" },
      { value: "fastest", label: "Fastest", icon: "fast_forward" }
    ],
    default: "cheapest",
    updateFilter: jest.fn()
  };
  const tree = renderer.create(<ToggleGroup {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
