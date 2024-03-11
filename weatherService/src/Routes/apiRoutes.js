const express = require("express");
const fetchData = require("../API/fetchData");

const router = express.Router();

router.get("/data/:q/:appId", async (req, res) => {
  const { q, appId } = req.params;
  try {
    const data = await fetchData(q, appId);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Failed to fetch data");
  }
});

module.exports = router;
