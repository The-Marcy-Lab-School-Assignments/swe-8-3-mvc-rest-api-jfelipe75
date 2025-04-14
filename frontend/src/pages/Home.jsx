import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fetchAllPlayers,
  createPlayer,
} from "../adapters/playerFetchers";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerStat, setNewPlayerStat] = useState("");
  const [newlyAddedPlayer, setNewlyAddedPlayer] = useState({});

  useEffect(() => {
    const doFetch = async () => {
      const [allPlayers, error] = await fetchAllPlayers();
      if (!error) setPlayers(allPlayers);
    };
    doFetch();
  }, [newlyAddedPlayer]);

  const handleCreatePlayer = async (e) => {
    e.preventDefault();
    const [newPlayer, error] = await createPlayer(newPlayerName, newPlayerStat);
    if (!error) {
      setNewlyAddedPlayer(newPlayer);
      setNewPlayerName("");
      setNewPlayerStat("");
    }
  };

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={handleCreatePlayer}>
        <label htmlFor="name">Add A New Player</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
        />
        <label htmlFor="goals">Add A New Goal Count</label>
        <input
          type="text"
          name="goals"
          id="stat"
          value={newPlayerStat}
          onChange={(e) => setNewPlayerStat(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`}>
              {player.playerName} (User {player.id})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
