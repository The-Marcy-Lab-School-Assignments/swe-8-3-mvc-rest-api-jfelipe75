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

export const updatePlayer = async (id, playerName) => {
  const options = {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ playerName }),
  };

  const [updatedPlayer, error] = await fetchData(`/api/players/${id}`, options);
  return [updatedPlayer, error];
};

export const deletePlayer = async (id) => {
  const options = {
    method: "DELETE",
  };
  const [success, error] = await fetchData(`/api/players/${id}`, options);
  return [success, error];
};
