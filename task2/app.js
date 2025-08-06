const express = require("express");
const app = express();
const showRoutes = require("./routes/showRoutes");

app.use(express.json());
app.use("/", showRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});
