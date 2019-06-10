/**
 * This function finds the vertix with the the minimum distance
 *
 * @param  {set} Q
 * @param  {object} dist
 */
const vertexWithMinDist = (Q, dist) => {
  let min_distance = Infinity,
    u = null;

  for (let v of Q) {
    if (dist[v] < min_distance) {
      min_distance = dist[v];
      u = v;
    }
  }
  return u;
};

/**
 * This function is based on Dijkstra algoritham which finds shortes contineous-
 * between two points
 *
 * Our interest of using this algoritham is just to find the contineous path.
 *
 * @param  {array} edges
 * @param  {string} source
 * @param  {string} target
 */
export const dijkstra = (edges, source, target) => {
  const Q = new Set(), // for saving uniq vetices
    prev = {},
    dist = {},
    adj = {};

  for (let i = 0; i < edges.length; i++) {
    let v1 = edges[i][0],
      v2 = edges[i][1],
      len = edges[i][2];

    // add vertices to the set, duplicates will be ignored
    Q.add(v1);
    Q.add(v2);

    // set intial distance to infinity
    dist[v1] = Infinity;
    dist[v2] = Infinity;

    if (adj[v1] === undefined) adj[v1] = {};
    if (adj[v2] === undefined) adj[v2] = {};

    // set the same distance for directly connected points
    adj[v1][v2] = len;
    adj[v2][v1] = len;
  }

  dist[source] = 0;

  while (Q.size) {
    let u = vertexWithMinDist(Q, dist),
      neighbors = Object.keys(adj[u]).filter(v => Q.has(v));

    Q.delete(u);

    if (u === target) break;

    for (let v of neighbors) {
      let alt = dist[u] + adj[u][v];
      if (alt < dist[v]) {
        dist[v] = alt;
        prev[v] = u;
      }
    }
  }

  {
    let u = target,
      S = [u],
      len = 0;

    while (prev[u] !== undefined) {
      S.unshift(prev[u]);
      len += adj[u][prev[u]];
      u = prev[u];
    }
    return [S, len];
  }
};
