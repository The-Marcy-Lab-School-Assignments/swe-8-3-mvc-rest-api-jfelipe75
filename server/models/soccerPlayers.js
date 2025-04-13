const getId = require("../utils/getId");
const soccerPlayers = [
  { playerName: "Messi", playerStats: "91", id: getId() },
  { playerName: "Neymar", playerStats: "50", id: getId() },
];

class SoccerPlayer {
  // Create and add the new player to the database
  static create(playerName, playerStats) {
    const newPlayer = {
      playerName,
      playerStats,
      id: getId(),
    };
    soccerPlayers.push(newPlayer);
    return newPlayer;
  }
  // get all values from the database
  static getAll() {
    return [...soccerPlayers];
  }
  // get one value from the database
  static find(id) {
    return soccerPlayers.find((player) => Number(id) === player.id);
  }
  // update one value from the "database"
  static editPlayer(id, playerName, playerStats) {
    let player = soccerPlayers.find((p) => p.id === Number(id));
    if (!player) return null;
    if (playerName) {
      player.playerName = playerName;
    }
    if (playerStats) {
      player.playerStats = playerStats;
    }
    return player;
  }
  // Delete one value from the database
  static delete(id) {
    const playerIndex = soccerPlayers.findIndex(
      (player) => player.id === Number(id)
    );
    if (playerIndex < 0) return false;

    soccerPlayers.splice(playerIndex, 1);
    return true;
  }
}

module.exports = SoccerPlayer;
