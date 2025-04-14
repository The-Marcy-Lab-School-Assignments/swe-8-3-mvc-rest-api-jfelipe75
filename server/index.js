// Imports
const path = require("path");
const express = require("express");
const app = express();
const pathToFrontendDist = path.join(__dirname, "../frontend/dist");

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

const serveStatic = express.static(pathToFrontendDist);

app.use(logRoutes);
app.use(serveStatic); // Serve static public/ content
app.use(express.json());
// Routes
app.get("/api/players", servePlayers);
app.get("/api/players/:id", servePlayer);
app.post("/api/players", createPlayer);
app.patch("/api/players/:id", updatePlayer);
app.delete("/api/players/:id", deletePlayer);

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
