import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import TripSelector from "../components/TripSelector/TripSelector";
import ToggleGroup from "../components/ToggleGroup/ToggleGroup";
import ButtonWithIcon from "../components/ButtonWithIcon/ButtonWithIcon";
import DataList from "../components/DataList/DataList";
import { getTrips, getDestinations } from "../api/tripPlanner";
import "./App.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const toggleOptions = [
  { value: "cheapest", label: "Cheapest", icon: "low_priority" },
  { value: "fastest", label: "Fastest", icon: "fast_forward" }
];

const App = props => {
  const classes = useStyles();

  const [trip, setTrip] = useState({
    selectedTripDirections: { from: "", to: "" },
    filter: toggleOptions[0].value,
    tripDirections: { departures: [], arrivals: [] }, // default data, before fetch
    trips: [],
    showLoading: false
  });

  useEffect(() => {
    const fetchData = async () => {
      const destinations = await getDestinations();

      setTrip({
        ...trip,
        tripDirections: {
          departures: destinations.departures,
          arrivals: destinations.arrivals
        }
      });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const updateTripDirections = (from, to) => {
    setTrip({ ...trip, selectedTripDirections: { from, to } });
  };

  const updateFilter = filter => {
    setTrip({ ...trip, filter });
  };

  const exploreHandler = async () => {
    setTrip({ ...trip, showLoading: true });

    const trips = await getTrips({
      selectedTripDirections: trip.selectedTripDirections,
      filter: trip.filter
    });

    setTrip({ ...trip, trips, showLoading: false });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Trip Planner
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className="content-wrapper" maxWidth="sm">
        <TripSelector
          options={trip.tripDirections}
          updateTripDirections={updateTripDirections}
        />
        <ToggleGroup
          options={toggleOptions}
          default={toggleOptions[0].value}
          updateFilter={updateFilter}
        />
        <div className="buttons-wrapper">
          <ButtonWithIcon
            disabled={
              trip.selectedTripDirections.from === "" ||
              trip.selectedTripDirections.from === "Select or type a keyword" ||
              trip.selectedTripDirections.to === "" ||
              trip.selectedTripDirections.to === "Select or type a keyword" ||
              trip.showLoading
            }
            color="primary"
            label="Explore"
            icon="find_in_page"
            onClick={exploreHandler}
          />
        </div>
        {trip.showLoading && <LinearProgress />}
        <DataList data={trip.trips} />
      </Container>
    </div>
  );
};

export default App;
