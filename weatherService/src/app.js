const express = require("express");
const apiRoutes = require("./Routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
