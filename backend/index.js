const express = require("express");
const app = express();
const Router = require("./routes/Routes");
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", Router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
});