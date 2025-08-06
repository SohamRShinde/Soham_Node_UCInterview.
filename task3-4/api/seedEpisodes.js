require("dotenv").config();
const mongoose = require("mongoose");
const axios = require("axios");
const Episode = require("./models/episodeModels");

const seedEpisodes = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const show = await axios.get("https://api.tvmaze.com/singlesearch/shows?q=friends");
    const episodes = await axios.get(`https://api.tvmaze.com/shows/${show.data.id}/episodes`);

    await Episode.deleteMany({});
    await Episode.insertMany(episodes.data);
    console.log("Episodes seeded successfully");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};

seedEpisodes();
