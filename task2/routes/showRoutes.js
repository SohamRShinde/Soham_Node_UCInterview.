const express = require("express");
const router = express.Router();
const {
  getShowDetails,
  getAllEpisodes,
} = require("../controllers/showController");

router.get("/show-details", getShowDetails);
router.get("/episodes", getAllEpisodes);

module.exports = router;