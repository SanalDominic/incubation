require("dotenv").config();
const express = require("express");
const adminHelper = require("../helpers/admin-helper");
const router = express.Router();
const {
  formSubmit,
  getData,
  pending,
  record,
  getSlots,
  bookedSlot,
} = require("../helpers/admin-helper");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

function middleWare(req, res, next) {
  const { authorization } = req.headers;
  jwt.verify(
    authorization,
    process.env.PRIVATE_KEY,
    async function (err, decoded) {
      if (err) {
        return res.json(false);
      }
      req.body.decoded = decoded;
      next();
    }
  );
}

router.post("/login", async (req, res) => {
  const data = req.body;
  const response = await adminHelper.login(data);
  if (!response.status) {
    return res.json({ status: "error" });
  }
  const token = jwt.sign(
    {
      name: response.user.name,
      email: response.user.email,
    },
    process.env.PRIVATE_KEY,
    { expiresIn: "1h" }
  );
  return res.json({ status: "ok", role: response.user.role, token: token });
});

//user side
router.get("/home", middleWare, async (req, res) => {
  const { decoded } = req.body;
  const user = await User.findOne({ email: decoded.email });
  if (user.submitted) res.json({ status: true, progress: user.status });
  else res.json({ status: false });
});

router.post("/submitform", middleWare, async (req, res) => {
  const { values, decoded } = req.body;
  const response = await formSubmit(values, decoded.email);
  if (!response) return res.json(false);
  else return res.json(true);
});

//admin side
router.get("/adminhome", middleWare, async (req, res) => {
  const response = await getData();
  res.json(response);
});

router.post("/change", middleWare, async (req, res) => {
  const { id, status } = req.body;
  const response = await pending(id, status);
});

router.get("/record", middleWare, async (req, res) => {
  const response = await record();
  res.json(response);
});

router.get("/slot", middleWare, async (req, res) => {
  const response = await getSlots();
  res.json(response);
});

router.post("/booked", middleWare, async (req, res) => {
  const { id, userId } = req.body;
  const response = await bookedSlot(id, userId);
  res.json(response);
});

module.exports = router;
