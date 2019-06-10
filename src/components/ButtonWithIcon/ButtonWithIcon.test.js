import React from "react";
import renderer from "react-test-renderer";
import ButtonWithIcon from "./ButtonWithIcon";

it("renders a snapshot", () => {
  const props = {
    label: "Sample",
    icon: "dummy"
  };
  const tree = renderer.create(<ButtonWithIcon {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
