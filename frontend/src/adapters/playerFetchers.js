import fetchData from "./fetchHandler";

export const fetchAllPlayers = async () => {
  const url = "/api/players/";
  const response = await fetchData(url);
  return response;
};

export const fetchPlayerById = async (id) => {
  const url = `/api/players/:${id}`;
  const response = await fetchData(url);
  return response;
};

export const createPlayer = async (playerName, playerStats) => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ playerName, playerStats }),
  };

  const [newPlayer, error] = await fetchData("/api/players/", options);
  return [newPlayer, error];
};
