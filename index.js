const express = require("express");
const path = require('path');
const app = express();
const { teams } = require("./teams");
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.get("/teams", (req, res) => {
  try {
    const simplifiedTeams = teams.map((team) => {
      const { id, title, short_name, logo, founded, colors } = team;
      return { id, title, name: short_name, logo, founded, colors: colors.hex };
    });
    res.status(200).json(simplifiedTeams);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching teams." });
  }
});

app.get("/detailed-teams", (req, res) => {
  res.status(200).json(teams);
});

app.get("/detailed-teams/:title", (req, res) => {
  try {
    const title = req.params.title.toLowerCase();

    const team = teams.find((team) => team.title.toLowerCase() === title);

    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ error: "Team not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the team." });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Wrong url address" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
