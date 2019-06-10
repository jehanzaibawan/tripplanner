import React from "react";
import renderer from "react-test-renderer";
import SearchableSelectBox from "./SearchableSelectBox";

it("renders a snapshot", () => {
  const props = {
    id: "random-id-010101",
    options: [{ value: "sample", label: "Sample" }],
    value: { value: "sample", label: "Sample" },
    handleChange: jest.fn(),
    isOptionDisabled: jest.fn()
  };
  const tree = renderer.create(<SearchableSelectBox {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
