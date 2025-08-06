const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  season: Number,
  number: Number,
  airdate: String,
  summary: String
});

module.exports = mongoose.model("Episode", episodeSchema);