const Episode = require("../models/episodeModels");

//task-3
const createEpisode = async (req, res) => {
  try {
    const newEpisode = await Episode.create(req.body);
    res.status(201).json(newEpisode);
  } catch (error) {
    res.status(500).json({ error: "Failed to create episode" });
  }
};

const getAllEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.status(200).json(episodes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch episodes" });
  }
};

const getEpisodeById = async (req, res) => {
  try {
    const episode = await Episode.findOne({ id: req.params.id });
    if (!episode) return res.status(404).json({ error: "Episodes not found" });
    res.status(200).json(episode);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getEpisodesBySeason = async (req, res) => {
  try {
    const episode = await Episode.find({ season: req.params.seasonNumber });
    if (!episode) return res.status(404).json({ error: "Episode not found" });
    res.status(200).json(episode);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getEpisodeBySeasonAndNumber = async (req, res) => {
  try {
    const episode = await Episode.findOne({ 
      season: req.params.seasonNumber, 
      number: req.params.episodeNumber 
    });
    if (!episode) return res.status(404).json({ error: "Episode not found" });
    res.status(200).json(episode);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

//task-4
const editFullEpisode = async (req, res) => {
  try{
    const EpData = req.body;
    const updatedEp = await Episode.findOneAndUpdate(
      { id: req.params.id },
      EpData,
      { new: true, overwrite: true}  
    );
    if(!updatedEp) return res.status(404).json({ message: "Episode not updated" });
    res.status(200).json(updatedEp);
    } catch (error) {
      res.status(500).json({ error: "Server error"});
    }
}

const editEpisode = async (req, res) => {
  try{
    const updatedEp = await Episode.findOneAndUpdate(
      { id: req.params.id },
      { $set: {
        name: req.body.name,
        season: req.body.season,
        number: req.body.number,
        airdate: req.body.airdate,
        summary: req.body.summary
        }},
      { new: true}  
    );
    if(!updatedEp) return res.status(404).json({ message: "Episode not updated" });
    res.status(200).json(updatedEp);
    } catch (error) {
      console.error("error: ", err);
      res.status(500).json({ error: "Server error"});
    }
}

const deleteEpisode = async (req, res) => {
  try{
    const deletedEp = await Episode.findOneAndDelete({
      id: req.params.id,
    });
    if(!deletedEp) return res.status(404).json({ message: "Episode not deleted" });
    res.status(200).json({ message: "Episode successfully deleted"});
    } catch (error) {
      res.status(500).json({ error: "Server error"});
    }
}


module.exports = {
  createEpisode,
  getAllEpisodes,
  getEpisodeById,
  getEpisodesBySeason,
  getEpisodeBySeasonAndNumber,
  editFullEpisode,
  editEpisode,
  deleteEpisode
};