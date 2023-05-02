const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
	res.send("Chef for Cook is running....!");
});
app.get("/chefs", (req, res) => {
	res.send(chefs);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
