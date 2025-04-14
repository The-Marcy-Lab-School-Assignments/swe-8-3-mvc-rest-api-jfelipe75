import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  fetchPlayerById,
  updatePlayer,
  deletePlayer,
} from "../adapters/playerFetchers";

const PlayerDetails = () => {
  const [player, setPlayer] = useState({});
  const [newPlayerName, setNewPlayerName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch player data on load
  useEffect(() => {
    const doFetch = async () => {
      const [foundPlayer, error] = await fetchPlayerById(id);
      if (!error) setPlayer(foundPlayer);
    };
    doFetch();
  }, [id]);

  // Delete the player and navigate back home
  const handleDeletePlayer = async () => {
    await deletePlayer(id);
    navigate("/");
  };

  // Handle name update
  const handleUpdatePlayer = async (e) => {
    e.preventDefault();
    const [updatedPlayer, error] = await updatePlayer(
      id,
      newPlayerName,
      player.playerStats
    ); // if you want to preserve playerStats
    if (!error) {
      setPlayer(updatedPlayer);
      setNewPlayerName("");
    }
  };

  return (
    <>
      <Link to="/">Go Home</Link>
      <h1>Player Details</h1>
      <p>Name: {player.playerName}</p>
      <p>Stats: {player.playerStats}</p>
      <p>ID: {player.id}</p>

      <form onSubmit={handleUpdatePlayer}>
        <label htmlFor="name">Update Player Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
          placeholder="New Name"
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={handleDeletePlayer} className="danger">
        Delete Player
      </button>
    </>
  );
};

export default PlayerDetails;
