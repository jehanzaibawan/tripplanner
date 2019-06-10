import data from "../resources/fares.json";
import { getDestination, getTripsBasedOnParams } from "../models/TripModel";

/**
 * This endpoint fetches the uniq departure and arrival destinations from the
 * fares file and sort them in alphabetical order
 *
 * @param  {object} req
 * @param  {object} res
 */
export const getDestinations = (req, res, next) => {
  try {
    const { departures, arrivals } = getDestination(data.deals);

    res.send(JSON.stringify({ departures, arrivals }));
  } catch (ex) {
    // @TODO: Further and more precise error handling is needed
    res.status(500).send(`Error descrption: ${ex}`);
  }
};

/**
 * This endpoint sorts the trip based on the given params passed into the body of the -
 * post request
 *
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
export const getTrips = (req, res, next) => {
  try {
    const { selectedTripDirections, filter } = req.body;
    const { from, to } = selectedTripDirections;

    const trips = getTripsBasedOnParams(data.deals, from, to, filter);

    res.send(JSON.stringify(trips));
  } catch (ex) {
    // @TODO: Further and more precise error handling is needed
    res.status(500).send(`Error descrption: ${ex}`);
  }
};
