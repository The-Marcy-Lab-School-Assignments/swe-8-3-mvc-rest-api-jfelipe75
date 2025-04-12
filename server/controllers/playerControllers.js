const SoccerPlayer = require("../models/soccerPlayers.js");

// Controllers
const createPlayer = (req, res) => {
  // store soccer player name in a variable
  console.log(req);
  const { playerName, playerStats } = req.body;

  if (!playerName && !playerStats)
    return res.status(400).send({ message: "Invalid Name" });

  // create a new player
  const newPlayer = SoccerPlayer.create(playerName, playerStats);
  res.send(newPlayer);
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
  res.send(player);
};

// serve the user all the soccer players
const servePlayers = (req, res) => {
  res.send(SoccerPlayer.getAll());
};

// Update soccer player name
const updatePlayer = (req, res) => {
  const { id } = req.params;
  const { playerName, playerStats } = req.body;
  const player = SoccerPlayer.editName(id, playerName, playerStats);
  res.send(player);
};

// deletes soccer player
const deletePlayer = (req, res) => {
  const { id } = req.params;
  if (!SoccerPlayer.deletePlayer(id)) {
    return res.sendStatus(204);
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
