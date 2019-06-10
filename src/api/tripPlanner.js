import { API_ADDRESS, API_PORT, API_END_POINT } from "./config";

const endpoint = `${API_ADDRESS}:${API_PORT}/${API_END_POINT}`;

export const getTrips = async params => {
  try {
    const response = await fetch(`${endpoint}/getTrips`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    });

    return await response.json();
  } catch (ex) {
    // handle all kind of exceptions here i.e (Network, Service down or Unavailable etc.)
    return [];
  }
};

export const getDestinations = async params => {
  try {
    const response = await fetch(`${endpoint}/getDestinations`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    });

    return await response.json();
  } catch (ex) {
    // handle all kind of exceptions here i.e (Network, Service down or Unavailable etc.)
    return [];
  }
};

// ...all other services offered by this API will be listed here
