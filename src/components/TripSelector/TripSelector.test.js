import React from "react";
import renderer from "react-test-renderer";
import TripSelector from "./TripSelector";

it("renders a snapshot", () => {
  const props = {
    options: { departures: [], arrivals: [] },
    updateTripDirections: jest.fn()
  };
  const tree = renderer.create(<TripSelector {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
