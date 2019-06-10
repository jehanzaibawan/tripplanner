import React from "react";
import renderer from "react-test-renderer";
import DataList from "./DataList";

it("renders a snapshot", () => {
  const props = {
    data: [
      {
        transport: "train",
        departure: "London",
        arrival: "Amsterdam",
        duration: {
          h: "05",
          m: "00"
        },
        cost: 160,
        discount: 0,
        reference: "TLA0500"
      }
    ]
  };
  const tree = renderer.create(<DataList {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
