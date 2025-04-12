// Imports
const express = require("express");
const app = express();

const {
  createPlayer,
  servePlayer,
  servePlayers,
  updatePlayer,
  deletePlayer,
} = require("./controllers/playerControllers");

// Middleware function for logging route requests
const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next(); // Passes the request to the next middleware/controller
};
app.use(logRoutes);
app.use(express.json());
// Routes
app.get("/api/players", servePlayers);
app.get("/api/player/:id", servePlayer);

app.post("/api/players", createPlayer);

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
