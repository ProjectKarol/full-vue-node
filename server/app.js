const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => {
	res.send({
		message: `user ${req.body.email} was regiser have fun`
	});
});
app.listen(8081);
