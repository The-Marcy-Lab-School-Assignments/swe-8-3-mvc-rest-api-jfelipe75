import { Routes, Route } from "react-router-dom"; // Like a signpost that tells your app which page to show when you visit a certain web address.
import Home from "./pages/Home";
import PlayerDetails from "./pages/PlayerDetails";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route> // route to home page
      <Route path="/players/:id" element={<PlayerDetails />}></Route>
    </Routes>
  );
}

export default App;
