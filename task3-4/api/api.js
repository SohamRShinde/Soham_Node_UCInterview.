require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const episodeRoutes = require("./routes/episodeRoutes");

const app = express();
app.use(express.json());
app.use("/api", episodeRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port http://localhost:${process.env.PORT}/`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
