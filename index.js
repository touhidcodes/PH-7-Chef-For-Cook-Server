const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
	res.send("Chef for Cook is running....!");
});

// all chefs data
app.get("/chefs", (req, res) => {
	res.send(chefs);
});

// Individual chefs data by id
app.get("/chefs/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const currentChef = chefs.find((chef) => chef.id === id);
	res.send(currentChef);
	console.log(currentChef);
	console.log(id);
});

//  Recipes data
app.get("/recipes", (req, res) => {
	res.send(recipes);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
