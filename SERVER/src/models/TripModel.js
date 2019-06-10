import _ from "lodash";
import { getPriceAfterDiscount, durationToMinutes } from "../utils/utils";
import { dijkstra } from "../libraries/dijkstra";

export const getDestination = data => {
  const departures = _.chain(data)
    .map("departure")
    .uniq()
    .sortBy()
    .value();

  const arrivals = _.chain(data)
    .map("arrival")
    .uniq()
    .sortBy()
    .value();

  return { departures, arrivals };
};

/**
 * This function is the main entry point for using this library, it first formats the
 * input for dijkstra algoritham into (vertix A, vertix B, cost) and gets contineous path
 *
 * Later by taking contineous path it finds fastest or cheapest path using a custom method
 *
 * @param  {array} edges
 * @param  {string} from
 * @param  {string} to
 * @param  {string} param
 */
export const getTripsBasedOnParams = (edges, from, to, param) => {
  let graph = [];

  graph = edges.map(edge => {
    return [
      edge.departure,
      edge.arrival,
      durationToMinutes(edge.duration.h, edge.duration.m)
    ];
  });

  let [path] = dijkstra(graph, from, to); // only interested in contineous path

  return findFastestOrCheapest(edges, path, param);
};

const findFastestOrCheapest = (edges, path, param) => {
  let entries = [];
  for (let ind = 0; ind < path.length; ind++) {
    if (typeof path[ind + 1] !== "undefined") {
      const entry = edges
        .filter(curr => {
          return curr.departure === path[ind] && curr.arrival === path[ind + 1];
        })
        .reduce((curr, ittr) => {
          if (_.isEmpty(curr)) {
            return ittr;
          }

          const x =
            param === "fastest"
              ? durationToMinutes(curr.duration.h, curr.duration.m)
              : getPriceAfterDiscount(curr.cost, curr.discount);
          const y =
            param === "fastest"
              ? durationToMinutes(ittr.duration.h, ittr.duration.m)
              : getPriceAfterDiscount(ittr.cost, ittr.discount);

          if (x > y) return ittr;
          return curr;
        }, {});
      entries.push(entry);
    }
  }
  return entries;
};
