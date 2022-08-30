const express = require("express");
const userHelper = require("../helpers/user-helper");
const router = express.Router();

router.post("/register", async (req, res) => {
  const data = req.body;
  const response = await userHelper.register(data);
  if (!response) {
    return res.json({ status: "error" });
  }
  return res.json({ status: "ok" });
});

module.exports = router;
