import React, { useState, useEffect } from "react";
import SearchableSelectBox from "../SearchableSelectBox/SearchableSelectBox";
import PropTypes from "prop-types";

const TripSelector = props => {
  const defaultValue = { value: "", label: "Select or type a keyword" };

  const [trip, setTrip] = useState({
    from: defaultValue,
    to: defaultValue
  });

  useEffect(() => {
    props.updateTripDirections(trip.from.label, trip.to.label);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trip]);

  const selectBoxFromHandleChange = selectedItem => {
    setTrip({ ...trip, from: selectedItem });
  };

  const selectBoxToHandleChange = selectedItem => {
    setTrip({ ...trip, to: selectedItem });
  };

  const formatTripOptions = options => {
    if (Array.isArray(options) && options.length > 0)
      return options.map(option => ({
        value: option.toLowerCase(),
        label: option
      }));
    else return [];
  };

  return (
    <React.Fragment>
      <SearchableSelectBox
        id="select-box-from"
        label="From"
        options={formatTripOptions(props.options.departures)}
        value={trip.from}
        handleChange={selectBoxFromHandleChange}
        isOptionDisabled={option => option.value === trip.to.value}
      />
      <SearchableSelectBox
        id="select-box-to"
        label="To"
        options={formatTripOptions(props.options.arrivals)}
        value={trip.to}
        handleChange={selectBoxToHandleChange}
        isOptionDisabled={option => option.value === trip.from.value}
      />
    </React.Fragment>
  );
};

TripSelector.propTypes = {
  options: PropTypes.shape({}).isRequired,
  updateTripDirections: PropTypes.func.isRequired
};

export default TripSelector;
