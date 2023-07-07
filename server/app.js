const express = require("express");
const router = require("./routes/routes");
const app = express();
const cors = require("cors");

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/", router);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
