const axios = require("axios");

const show = "friends";

const getShowDetails = async (req, res) => {
  try {
    const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${show}`);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch show details" });
  }
};

async function getAllEpisodes(req, res) {
  try {
    const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${show}`);
    const showId = response.data.id;

    const episodesResponse = await axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`);
    res.status(200).json(episodesResponse.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch episodes" });
  }
};

module.exports = {
  getShowDetails,
  getAllEpisodes,
};