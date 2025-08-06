const express = require("express");
const router = express.Router();
const {
  createEpisode,
  getAllEpisodes,
  getEpisodeById,
  getEpisodesBySeason,
  getEpisodeBySeasonAndNumber,
  editFullEpisode,
  editEpisode,
  deleteEpisode
} = require("../controllers/episodeControllers");

router.post("/episodes", createEpisode);
router.get("/episodes", getAllEpisodes);
router.get("/episodes/:id", getEpisodeById);
router.get("/seasons/:seasonNumber/episodes", getEpisodesBySeason);
router.get("/seasons/:seasonNumber/episodes/:episodeNumber", getEpisodeBySeasonAndNumber);
router.put("/episodes/:id", editFullEpisode);
router.patch("/episodes/:id",editEpisode);
router.delete("/episodes/:id",deleteEpisode);

module.exports = router;
