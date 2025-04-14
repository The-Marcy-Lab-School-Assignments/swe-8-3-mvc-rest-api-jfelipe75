import fetchData from "./fetchHandler";

// GET all players
export const fetchAllPlayers = async () => {
  const [response, error] = await fetchData("/api/players/");
  return [response, error];
};

// GET a single player by ID
export const fetchPlayerById = async (id) => {
  const [response, error] = await fetchData(`/api/players/${id}`);
  return [response, error];
};

// POST a new player
export const createPlayer = async (playerName, playerStats) => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ playerName, playerStats }),
  };

  const [newPlayer, error] = await fetchData("/api/players/", options);
  return [newPlayer, error];
};

// PATCH an existing player
export const updatePlayer = async (id, playerName, playerStats) => {
  const options = {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ playerName, playerStats }),
  };

  const [updatedPlayer, error] = await fetchData(`/api/players/${id}`, options);
  return [updatedPlayer, error];
};

// DELETE a player by ID
export const deletePlayer = async (id) => {
  const options = {
    method: "DELETE",
  };

  const [success, error] = await fetchData(`/api/players/${id}`, options);
  return [success, error];
};
