const express = require("express");
const app = express();


const PORT = process.env.PORT || 4000;

const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");

mongoose
  .connect("mongodb://localhost:27017/incubation")
  .then(() => console.log("Db Connected"));

app.use(cors());
app.use(express.json());

app.use("/", userRoute);
app.use("/admin", adminRoute);

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
