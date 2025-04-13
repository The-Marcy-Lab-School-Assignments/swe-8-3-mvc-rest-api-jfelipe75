const SoccerPlayer = require("../models/soccerPlayers.js");

// Controllers
const createPlayer = (req, res) => {
  const { playerName, playerStats } = req.body;

  if (!playerName || !playerStats) {
    return res
      .status(400)
      .send({ message: "Both playerName and playerStats are required." });
  }

  const newPlayer = SoccerPlayer.create(playerName, playerStats);
  res.status(201).send(newPlayer); // 201 = Created
};

// Use 'Player.find'  to get the desired player
const servePlayer = (req, res) => {
  const { id } = req.params;
  const player = SoccerPlayer.find(Number(id));

  if (!player) {
    return res.status(404).send({
      message: `No player with the id ${id}`,
    });
  }
  console.log(player);
  res.send(player);
};

// serve the user all the soccer players
const servePlayers = (req, res) => {
  res.send(SoccerPlayer.getAll());
};

// Update soccer player info
const updatePlayer = (req, res) => {
  const { id } = req.params;
  const { playerName, playerStats } = req.body;
  const player = SoccerPlayer.editPlayer(id, playerName, playerStats);
  console.log(player);
  res.send(player);
};

// deletes soccer player
const deletePlayer = (req, res) => {
  const { id } = req.params;

  const deleted = SoccerPlayer.delete(id);

  if (deleted) {
    console.log(SoccerPlayer.getAll());
    return res.sendStatus(204); // Successfully deleted
  }

  res.status(404).send({
    message: "Not Found — Resource doesn’t exist (e.g. user ID not found).",
  });
};

module.exports = {
  createPlayer,
  servePlayer,
  servePlayers,
  updatePlayer,
  deletePlayer,
};
